import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Activity() {
  const columns = [
    {
      title: 'Description',
      key: 'description',
    },
    {
      title: 'Tanggal & Waktu',
      key: 'created_at',
    },
  ];

  const data = [
    {
      description: 'Super Admin melakukan Login',
      created_at: '17/09/2025 08.30',
    },
    {
      description: 'Super Admin Mengupdate data aplikasi “POLADKAMI”',
      created_at: '17/09/2025 13.30',
    },
    {
      description: 'Super Admin Melihat dashboard ringkasan aplikasi OPD',
      created_at: '18/09/2025 13.17',
    },
  ];

  return (
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
                return <TableHead key={`data-${dataIndex}-${index}`}>{(item as any)?.[column.key]}</TableHead>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
