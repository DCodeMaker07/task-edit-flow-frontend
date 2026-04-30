/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { UserFilters, UserFormModal, UserPagination, UserTable } from "@/components";
import { User } from "@/redux/services/interfaces/users/User-response";
import { useGetUsersQuery } from "@/redux/services/user-api";
import { useEffect, useState } from "react";

export default function UsersPage() {

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [role, setRole] = useState<string>("");

  const { data: response, isLoading, isFetching, error } = useGetUsersQuery({
    page,
    limit: pageSize,
    userRole: role,
  });

  useEffect(() => {
    setPage(1);
  }, [role]);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>some error</p>;

  const totalPages = response?.meta?.totalPages || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  console.log(response)
  return (
    <div className='lg:w-[88%] flex flex-col gap-4'>
      <div className='flex justify-between'>
        <p className='text-zinc-500'>Manage and control user accounts</p>
        <button className="btn btn-primary" onClick={() => {
          setSelectedUser(null);
          const modal = document.getElementById('my_user_form_modal') as HTMLDialogElement | null;
          modal?.showModal();
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
          </svg>
          New User
        </button>
      </div>

      <UserFilters role={role} setRole={setRole} />
      <UserTable users={response!.data!} setSelectedUser={setSelectedUser} />

      <UserPagination page={page} pages={pages} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} />

      <UserFormModal user={selectedUser || undefined} />

    </div>
  )
}
