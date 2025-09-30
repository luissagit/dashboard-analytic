import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateLayout = React.lazy(() => import('./layout'));
const DashboardPage = React.lazy(() => import('./pages/dashboard'));
const ApplicationPage = React.lazy(() => import('./pages/application'));
const ReportPage = React.lazy(() => import('./pages/report'));

const ApplicationDetailPage = React.lazy(() => import('./pages/application/application-detail'));

export default function PrivateApp() {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/dashboard'} />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/application/detail/:id" element={<ApplicationDetailPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </PrivateLayout>
  );
}
