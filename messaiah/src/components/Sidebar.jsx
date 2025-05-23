import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed }) => {
  return (
    <div className="sidebar-layout">
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <h2 className="brand">📊 Messiah's Admin</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                📋 Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>
                📁 Menu Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/salesreport" className={({ isActive }) => isActive ? 'active' : ''}>
                📊 Sales Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
                ⚙️ Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
