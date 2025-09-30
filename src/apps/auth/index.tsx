import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AuthLayout = React.lazy(() => import('./layout'));
const Login = React.lazy(() => import('./pages/login'));

export default function AuthApp() {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/auth/login'} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthLayout>
  );
}
