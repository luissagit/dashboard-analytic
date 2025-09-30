import { useParams } from 'react-router-dom';
import Summary from './summary';
import LineChart from './line-chart';
import PieChart from './pie-chart';
import PageActivity from './page-activity';

export default function ApplicationDetail() {
  const params = useParams();
  const id = params?.id;

  return (
    <div>
      <h3 className="font-bold text-lg">Detail Aplikasi - {id?.toUpperCase()}</h3>
      <Summary />
      <div className="flex gap-2 mt-2">
        <LineChart />
        <PieChart />
      </div>
      <PageActivity />
    </div>
  );
}
