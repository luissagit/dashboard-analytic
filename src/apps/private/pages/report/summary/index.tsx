import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  description: string;
  extra?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, extra }) => {
  const isPositive = value >= 0;
  return (
    <Card className="">
      <CardHeader className="flex justify-between items-start">
        <CardTitle>{title}</CardTitle>
        <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {Math.abs(10)}%
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm mt-1">{description}</div>
        {extra && <div className="text-xs text-gray-400 mt-1">{extra}</div>}
      </CardContent>
    </Card>
  );
};

export default function Summary() {
  const items = [
    {
      title: 'Total Aplikasi',
      value: 3,
      description: 'Jumlah aplikasi aktif',
    },
    {
      title: 'Total Kunjungan',
      value: 200,
      description: 'total kunjungan aplikasi',
    },
    {
      title: 'Pengguna aktif',
      value: 1,
      description: 'Jumlah pengguna yang sedang mengakses aplikasi',
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-3 mt-3">
      {items.map((item) => {
        return (
          <MetricCard
            title={item.title}
            value={item.value}
            description={item.description}
            // extra="Visitors for the last 6 months"
          />
        );
      })}
    </div>
  );
}
