import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './SettingsPage.css';

import GeneralSettings from './GeneralSettings';
import BusinessSettings from './BusinessSettings';
import PaymentSettings from './PaymentSettings';


const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Sidebar */}
      <div className="sidebar bg-warning" style={{ width: '240px', flexShrink: 0 }}>
        <div className="p-3">
          <h1 className="logo">☕ Messiah Logo</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">📋 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">🍽️ Menu Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/salesreport" className="nav-link">📊 Sales Reports</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link active">⚙️ Settings</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1 d-flex flex-column">
        <div className="p-4">
          <h2 className="page-title">Settings</h2>

          <div className="card bg-warning">
            <div className="card-body">
              <div className="tab-buttons mb-3 d-flex justify-content-center gap-3">
                <button
                  className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  General
                </button>
                <button
                  className={`tab-button ${activeTab === 'business' ? 'active' : ''}`}
                  onClick={() => setActiveTab('business')}
                >
                  Business
                </button>
                <button
                  className={`tab-button ${activeTab === 'payment' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payment')}
                >
                  Payment
                </button>
              </div>

              <hr />

              {/* Tab Content */}
              {activeTab === 'general' && <GeneralSettings />}
              {activeTab === 'business' && <BusinessSettings />}
              {activeTab === 'payment' && <PaymentSettings />}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
