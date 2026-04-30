type Props = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>
}

export const UserFilters = ({ role, setRole }: Props) => {
  return (
    <div className='bg-zinc-50 shadow-md rounded-md'>
      <div className='w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-4 p-4 lg:p-6'>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Role</legend>
          <select className="select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option disabled={true}>Pick a role</option>
            <option value={""}>All Roles</option>
            <option value={"ADMIN"}>Admin</option>
            <option value={"PROJECT_MANAGER"}>Project Manager</option>
            <option value={"DEVELOPER"}>Developer</option>
          </select>
        </fieldset>
      </div>
    </div>
  )
}
