import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/SettingsPage';
import SalesReport from './pages/salesreport/SalesReportPage';
import MenuManagement from './pages/menu/MenuManagementPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Redirect from / to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Main routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/salesreport" element={<SalesReport />} />
        <Route path="/settings" element={<Settings />} />


        {/* 404 fallback route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
