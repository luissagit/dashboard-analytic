import React from 'react';

const Summary = React.lazy(() => import('./summary'));
const LineChart = React.lazy(() => import('./line-chart'));
const PieChart = React.lazy(() => import('./pie-chart'));
const Activity = React.lazy(() => import('./activity'));

export default function Dashboard() {
  return (
    <>
      <Summary />
      <div className="flex gap-2 mt-2">
        <LineChart />
        <PieChart />
      </div>
      <Activity />
    </>
  );
}
