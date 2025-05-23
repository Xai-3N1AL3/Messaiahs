import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './SalesReportPage.css';

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

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Topbar */}
      <div className="topbar d-flex align-items-center justify-content-end px-3 py-2 border-bottom">
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="btn btn-outline-dark position-relative">
            <i className="bi bi-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <span className="visually-hidden">unread alerts</span>
            </span>
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content flex-grow-1 px-4 py-3 overflow-auto">
        <h2 className="page-title mx-3">Sales Report</h2>

        <div className="report-card px-3">
          <div className="tab-buttons">
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
          <div className="chart-container" style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <LineChart data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesReportPage;
