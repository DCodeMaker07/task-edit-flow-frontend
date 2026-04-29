import { getProjectProgress } from '@/utils/getProgress';
import { Project } from '@/utils/projects'
type Props = {
    project: Project
}
export const ProjectItem = ({ project }: Props) => {
    const { total, completed } = getProjectProgress(project.tasks);
    const statusStyles = {
        ACTIVE: 'bg-green-100 text-green-700',
        ARCHIVED: 'bg-zinc-100 text-zinc-700',
    };
    return (
        <div className="p-4 bg-white rounded-lg shadow space-y-3 cursor-pointer transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <h2 className="font-bold">{project.name}</h2>
                    <span className={`text-xs px-2 py-1 rounded ${statusStyles[project.status]}`}>
                        {project.status}
                    </span>
                </div>

                <p className="text-sm text-zinc-600">{project.description}</p>

            </div>

            <div className="flex items-center">
                <div className='w-[40%]'>
                    <span className="text-sm text-zinc-500">
                        {completed}/{total} tasks completed
                    </span>
                </div>

                <div className='w-[60%] flex justify-end'>
                    <progress className="progress w-56" value={completed} max={total}></progress>
                </div>

            </div>

        </div>
    )
}
