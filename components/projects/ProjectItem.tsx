import { Project } from '@/redux/services/interfaces/projects/Project-response';
import { useDeleteProjectMutation } from '@/redux/services/project-api';
import { getProjectProgress } from '@/utils/getProgress';

type Props = {
    project: Project,
    setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}
export const ProjectItem = ({ project, setSelectedProject }: Props) => {
    const { total, completed } = getProjectProgress(project.tasks);
    const [deleteProject] = useDeleteProjectMutation();
    const statusStyles = {
        ACTIVE: 'bg-green-100 text-green-700',
        ARCHIVED: 'bg-zinc-100 text-zinc-700',
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure?")) return;

        await deleteProject(project.id);
    };

    const handleEdit = async () => {
        setSelectedProject(project);
        const modal = document.getElementById('my_project_form_modal') as HTMLDialogElement | null;
        modal?.showModal();
    }
    return (
        <div className="p-4 bg-white rounded-lg shadow space-y-3 cursor-pointer transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <h2 className="font-bold">{project.name}</h2>

                    <div className='flex flex-row gap-2'>
                        <span className={`text-xs px-2 py-1 rounded ${statusStyles[project.status]}`}>
                            {project.status}
                        </span>

                        <button type='button' className='btn bg-accent w-8 h-8' onClick={handleEdit}>
                            ✏️
                        </button>
                        <button type='button' className='btn bg-secondary w-8 h-8 text-zinc-50' onClick={handleDelete}>
                            X
                        </button>

                    </div>
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
