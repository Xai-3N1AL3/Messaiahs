import React, { useState } from 'react';
import './SettingsPage.css'; // Reuse your existing styles

const days = ['Monday', 'Tuesday', 'Wednesday'];

const BusinessSettings = () => {
  const [hours, setHours] = useState({
    Monday: { open: '6:00', close: '9:00', status: 'Open' },
    Tuesday: { open: '6:00', close: '9:00', status: 'Open' },
    Wednesday: { open: '6:00', close: '9:00', status: 'Open' },
  });

  const [delivery, setDelivery] = useState({
    fee: '50',
    radius: '5km',
  });

  const handleTimeChange = (day, field, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleDeliveryChange = (field, value) => {
    setDelivery((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <h5 className="card-title mb-3">Business Hours</h5>
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                <input
                  type="time"
                  className="form-control text-center"
                  value={hours[day].open}
                  onChange={(e) => handleTimeChange(day, 'open', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="time"
                  className="form-control text-center"
                  value={hours[day].close}
                  onChange={(e) => handleTimeChange(day, 'close', e.target.value)}
                />
              </td>
              <td>
                <span className="badge bg-success">{hours[day].status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h5 className="card-title">Delivery Settings</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Delivery Fee</label>
          <input
            type="number"
            className="form-control"
            value={delivery.fee}
            onChange={(e) => handleDeliveryChange('fee', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Delivery Radius</label>
          <input
            type="text"
            className="form-control"
            value={delivery.radius}
            onChange={(e) => handleDeliveryChange('radius', e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessSettings;
