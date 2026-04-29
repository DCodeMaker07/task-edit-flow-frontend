import { StatsResponse } from "@/redux/services/interfaces/tasks/Task-stats-response";

export const orderedStatuses = ['TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE'];

export const getStatsArray = (stats?: StatsResponse) => {
  const statsArray = stats
  ? Object.entries(stats).map(([key, value]) => ({
      status: key,
      count: value,
    }))
  : [];

  return statsArray;
};