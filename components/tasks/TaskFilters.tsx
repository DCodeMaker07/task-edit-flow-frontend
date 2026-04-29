type Props = {
  status: string;
  priority: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>
  setPriority: React.Dispatch<React.SetStateAction<string>>
}
export const TaskFilters = ({ status, priority, setStatus, setPriority }: Props) => {
  return (
    <div className='bg-zinc-50 shadow-md rounded-md'>
      <div className='w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-4 p-4 lg:p-6'>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Status</legend>
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option disabled={true}>Pick a status</option>
            <option value={""}>All Status</option>
            <option value={"TODO"}>To do</option>
            <option value={"IN_PROGRESS"}>In Progress</option>
            <option value={"IN_REVIEW"}>In Review</option>
            <option value={"DONE"}>Done</option>
          </select>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Priority</legend>
          <select className="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option disabled={true}>Pick a priority</option>
            <option value={""}>All Priority</option>
            <option value={"LOW"}>Low</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HIGH"}>High</option>
            <option value={"CRITICAL"}>Critical</option>
          </select>

        </fieldset>

      </div>
    </div>
  )
}
