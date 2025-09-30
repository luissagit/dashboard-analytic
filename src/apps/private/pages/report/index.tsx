import { Button } from '@/components/ui/button';
import Summary from './summary';
import { DatePicker, SelectApp } from './filter';
import Application from './application';

export default function Report() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-lg">Laporan analytic aplikasi</h1>
        <Button>Unduh Laporan</Button>
      </div>
      <div className="mt-3">
        <div className="flex gap-2 items-end">
          <DatePicker label="Tanggal Mulai" />
          <DatePicker label="Tanggal Akhir" />
          <SelectApp />
        </div>
        <Summary />
        <Application />
      </div>
    </div>
  );
}
