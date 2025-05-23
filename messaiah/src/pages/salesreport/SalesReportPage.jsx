import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './SalesReportPage.css';

// Sample Data (weekly)
const sampleData = [
  { day: '1', sales: 10000 },
  { day: '2', sales: 13000 },
  { day: '3', sales: 12500 },
  { day: '4', sales: 10500 },
  { day: '5', sales: 13500 },
  { day: '6', sales: 12000 },
  { day: '7', sales: 11000 }
];

const SalesReportPage = () => {
  const [activeTab, setActiveTab] = useState('Weekly');
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="container-fluid p-0 vh-100">
      <div className="row g-0 h-100">
        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 ps-md-0 d-flex mx-0 flex-column">
          {/* Topbar */}
          <div className="topbar d-flex justify-content-end align-items-center px-0 py-0 border-bottom">
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
                  2
                  <span className="visually-hidden">unread alerts</span>
                </span>
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-grow-1 overflow-auto">
            <h2 className="page-title">Sales Report</h2>

            <div className="report-card d-flex flex-column h-100">
              {/* Tab Buttons */}
              <div className="tab-buttons mb-3">
                {['Daily', 'Weekly', 'Monthly', 'Custom/filter'].map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Chart */}
              <div className="chart-container flex-grow-1">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sampleData}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReportPage;
