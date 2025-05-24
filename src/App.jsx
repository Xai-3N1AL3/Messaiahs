import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import MenuManagement from './pages/menu/MenuManagementPage';
import SalesReports from './pages/salesreport/SalesReportPage';
import SettingsPage from './pages/settings/SettingsPage';
import Login from './pages/admin/Login';

function App() {
  return (
    <Routes>
      {/* Login page (no sidebar) */}
      <Route path="/" element={<Login />} />

      {/* Pages with sidebar */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="menu" element={<MenuManagement />} />
        <Route path="salesreport" element={<SalesReports />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
