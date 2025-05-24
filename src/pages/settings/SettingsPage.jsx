import React, { useState } from 'react';
import GeneralSettings from './GeneralSettings';
import BusinessSettings from './BusinessSettings';
import PaymentSettings from './PaymentSettings';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <>
      <h2 className="page-title mx-3">Settings</h2>
      <div className="card bg-warning">
        <div className="card-body">
          <div className="tab-buttons mb-3 d-flex justify-content-center gap-3">
            <button
              className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >General</button>
            <button
              className={`tab-button ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => setActiveTab('business')}
            >Business</button>
            <button
              className={`tab-button ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >Payment</button>
          </div>
          <hr />
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'business' && <BusinessSettings />}
          {activeTab === 'payment' && <PaymentSettings />}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;