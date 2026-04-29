type Props = {
  status: string;
  label: string;
  count: number;
  style: string;
};

export const StatCard = ({ label, count, style }: Props) => {
  return (
    <div className='bg-zinc-50 shadow-md p-8 rounded-md'>
      <div className='flex flex-col gap-y-4'>
        
        <div className='flex justify-between'>
          <p className='text-zinc-700'>{label}</p>
          <p className={`rounded-full px-2 ${style}`}>
            {count}
          </p>
        </div>

        <div>
          <p className='text-3xl'>{count}</p>
        </div>

      </div>
    </div>
  );
};
