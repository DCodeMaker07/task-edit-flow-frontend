"use client"
import { ProjectItem } from '@/components'
import { useGetProjectsQuery } from '@/redux/services/project-api'
export default function ProjectsPage() {
  const { data: response, isLoading, isFetching, error } = useGetProjectsQuery(null);
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>some error</p>;
  return (
    <div className='lg:w-[88%] flex flex-col gap-6'>
      <div className='flex justify-between'>
        <p className='text-zinc-500'>Manage your projects and track progress</p>
        <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
          </svg>
          New Project
        </button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          response?.data.map((item) => <ProjectItem key={item.id} project={item} />)
        }
      </div>

    </div>
  )
}
