import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { LabelList, Pie, PieChart } from 'recharts';

const chartData = [
  { location: 'mobile', visitors: 275, fill: '#ddd' },
  { location: 'chrome', visitors: 200, fill: '#d5a4a4ff' },
  { location: 'safari', visitors: 187, fill: '#b2d2eeff' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-1)',
  },
  chrome: {
    label: 'Chrome',
    color: 'var(--chart-2)',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export default function PieChartComponent() {
  return (
    <Card className="flex flex-col w-1/2">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribusi Perangkat</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="location"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
