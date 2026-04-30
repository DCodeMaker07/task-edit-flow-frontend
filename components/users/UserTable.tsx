"use client"
import { User, UserRole } from '@/redux/services/interfaces/users/User-response';
import { useDeleteUserMutation } from '@/redux/services/user-api';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { format } from 'date-fns';

type Props = {
  users: User[],
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserTable = ({ users, setSelectedUser }: Props) => {
    
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(userId);
    }
  }

  const handleEdit = async (user: User) => {
    setSelectedUser(user);
    const modal = document.getElementById('my_user_form_modal') as HTMLDialogElement | null;
    modal?.showModal();
  }

  const getRoleStyles = (role: UserRole) => {
    const styles = {
      [UserRole.Admin]: 'bg-red-100 text-red-700',
      [UserRole.ProjectManager]: 'bg-blue-100 text-blue-700',
      [UserRole.Developer]: 'bg-green-100 text-green-700',
    };
    return styles[role] || 'bg-gray-100 text-gray-700';
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => {
        const role = row.original.role;

        return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleStyles(role)}`}>
            {role === UserRole.Admin && 'Admin'}
            {role === UserRole.ProjectManager && 'Project Manager'}
            {role === UserRole.Developer && 'Developer'}
          </span>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) => {
        const date = row.original.createdAt;
        if (!date) return '—';

        return format(new Date(date), "yyyy-MM-dd HH:mm");
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex gap-2">
            <button className='btn btn-warning' onClick={() => handleEdit(user)}>
              ✏️
            </button>

            <button
              className='btn bg-rose-600 text-zinc-50'
              onClick={() => handleDelete(user.id)}
            >
              X
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({ data: users, columns, getCoreRowModel: getCoreRowModel() });

  if (users.length === 0) {
    return (
      <div className="rounded-box border border-base-content/5 bg-base-100 p-8 text-center">
        <p className='text-zinc-500'>No users found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">

        {/* HEADER */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='text-zinc-800' key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* BODY */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
