"use client";
import { StatsGrid, UpcomingTasks } from "@/components";
import { useGetStatsQuery, useGetTasksQuery } from "@/redux/services/task-api";

export default function DashboardPage() {
  const { data: response, error, isLoading, isFetching } = useGetTasksQuery({
    page: 1,
    pageSize: 10
  });
  const { data: statsResponse } = useGetStatsQuery(null);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>some error</p>;

  return (
    <div className='lg:w-[88%] flex flex-col gap-6'>
      
      <StatsGrid stats={statsResponse!.data!} />

      <UpcomingTasks tasks={response!.data!} />

    </div>
  );
}