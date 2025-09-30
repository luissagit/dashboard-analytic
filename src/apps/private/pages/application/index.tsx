import React from 'react';

const ApplicationItem = React.lazy(() => import('./application-item'));

export default function Application() {
  const data = [
    {
      id: 'polakami',
      title: 'POLAKAMI',
    },
    {
      id: 'lapakami',
      title: 'LAPAKAMI',
    },
    {
      id: 'dilandacita',
      title: 'DILANDACITA',
    },
    {
      id: 'simponi',
      title: 'SIMPONI',
    },
    {
      id: 'silatik',
      title: 'SILATIK',
    },
    {
      id: 'satudata',
      title: 'SATU DATA',
    },
    {
      id: 'websitediskominfo',
      title: 'WEBSITE DISKOMINFO',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item) => {
        return <ApplicationItem data={item} />;
      })}
    </div>
  );
}
