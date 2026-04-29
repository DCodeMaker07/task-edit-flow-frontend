import { StatCard } from '@/components';
import { getStatsArray } from '@/lib/constants/getStatsArray';
import { statusConfig } from '@/lib/constants/statusConfig';
import { StatsResponse } from '@/redux/services/interfaces/tasks/Task-stats-response';

type Props = {
  stats?: StatsResponse;
};

export const StatsGrid = ({ stats }: Props) => {
  const statsArray = getStatsArray(stats);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
      {statsArray.map((item) => {
        const config = statusConfig[item.status as keyof typeof statusConfig];

        return (
          <StatCard
            key={item.status}
            status={item.status}
            label={config.label}
            count={item.count}
            style={config.style}
          />
        );
      })}
    </div>
  );
};