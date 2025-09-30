import type { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AuthLayout(props: AdminLayoutProps) {
  const { children } = props;

  return (
    <div className="w-full h-full flex justify-around items-center">
      <div></div>
      {children}
    </div>
  );
}
