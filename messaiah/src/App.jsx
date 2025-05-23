import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import MenuManagement from './pages/menu/MenuManagementPage';
import SalesReports from './pages/salesreport/SalesReportPage';
import SettingsPage from './pages/settings/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="menu" element={<MenuManagement />} />
        <Route path="salesreport" element={<SalesReports />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
