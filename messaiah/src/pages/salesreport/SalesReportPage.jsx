import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">☕ Messiah's Admin Panel</h1>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">📋 Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">🍽️ Menu Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/salesreport" className="nav-link active">📊 Sales Reports</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">⚙️ Settings</Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="main-content p-4 w-100">
        <h2 className="page-title">Sales Report</h2>

        <div className="report-card">
          {/* Tab Buttons */}
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

          {/* Chart */}
          <div className="chart-container">
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
  );
};

export default SalesReportPage;
