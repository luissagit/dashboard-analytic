import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PageActivity() {
  const columns = [
    {
      title: 'Halaman',
      key: 'description',
    },
    {
      title: 'Jumlah akses',
      key: 'total',
    },
  ];

  const data = [
    {
      description: 'Halaman beranda',
      total: 20,
    },
    {
      description: 'Halaman pengumuman',
      total: 32,
    },
    {
      description: 'Halaman aplikasi',
      total: 44,
    },
  ];

  return (
    <Card className="mt-3 p-2">
      <CardHeader>
        <CardTitle>Halaman Paling Banyak Diakses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns?.map((item, index) => {
                return <TableHead key={`header-${index}`}>{item.title}</TableHead>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item, dataIndex) => {
              return (
                <TableRow key={`data-${dataIndex}`}>
                  {columns?.map((column, index) => {
                    return <TableCell key={`data-${dataIndex}-${index}`}>{(item as any)?.[column.key]}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
