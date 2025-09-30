import { Progress } from '@/components/ui/progress';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AuthApp = lazy(() => import('./auth'));
const PrivateApp = lazy(() => import('./private'));

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Suspense
        fallback={
          <div>
            <Progress value={33} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to={'/auth'} />} />
          <Route path="/auth/*" element={<AuthApp />} />
          <Route path="/private/*" element={<PrivateApp />} />
        </Routes>
      </Suspense>
    </div>
  );
}
