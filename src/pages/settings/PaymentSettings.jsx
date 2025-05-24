import React, { useState } from 'react';

const PaymentSettings = () => {
  const [formData, setFormData] = useState({
    gcashNumber: '',
    accountName: '',
    qrCode: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Settings:', formData);
    // Normally you would send this to a backend or API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">Gcash Payment Method</h5>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Gcash Number</label>
          <input
            type="text"
            name="gcashNumber"
            className="form-control"
            value={formData.gcashNumber}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Account Name</label>
          <input
            type="text"
            name="accountName"
            className="form-control"
            value={formData.accountName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">QR Code Image</label>
        <input
          type="file"
          name="qrCode"
          className="form-control"
          onChange={handleChange}
          accept="image/*"
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark">Save</button>
      </div>
    </form>
  );
};

export default PaymentSettings;
