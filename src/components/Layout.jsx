import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="container-fluid p-0 vh-100">
      <div className="row g-0 h-100">
        <Sidebar collapsed={collapsed} />

        <div className="col main-content-wrapper">
          {/* Topbar */}
          <div className="topbar d-flex justify-content-end align-items-center px-3 border-bottom">
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-light btn-sm d-md-none me-3"
                onClick={() => setCollapsed(!collapsed)}
              >
                <i className="bi bi-list"></i>
              </button>
              <button type="button" className="btn btn-outline-dark position-relative">
                <i className="bi bi-bell"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          {/* Page Content */}
          <div className="main-content flex-grow-1 overflow-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
