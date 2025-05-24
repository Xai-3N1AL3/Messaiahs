import React, { useState } from 'react';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    name: 'Messiaiah Cafe',
    phone: '0912-345-6789',
    address: 'Adress.paz Street',
    email: 'email@gmail.com',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saved data:', formData);
  };

  return (
    <form onSubmit={handleSave}>
      <h5>About Us</h5>
      <div className="row mt-3">
        <div className="col-md-6 mb-3">
          <label className="form-label">Restaurant Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark">Save</button>
      </div>
    </form>
  );
};

export default GeneralSettings;
