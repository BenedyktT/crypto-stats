import { StatsResponse } from '../utils/fetch-stats';

const Stats = ({ stats }: { stats: StatsResponse }) => {
  stats.hashrate;
  const showStats = () => {
    return Object.entries(stats).map(([key, value], i) => {
      return (
        <div key={i} className="flex justify-between">
          <div className="">{key}</div>
          <div className="">{value}</div>
        </div>
      );
    });
  };

  return <div className="grid grid-cols-1 w-1/2">{showStats()}</div>;
};

export default Stats;
