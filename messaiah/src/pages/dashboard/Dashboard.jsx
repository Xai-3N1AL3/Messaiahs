import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';

const orders = [
  { id: 'ORD-001', product: 'CCB', items: 3, amount: 450, status: 'Completed', date: '2023-06-15' },
  { id: 'ORD-002', product: 'CLICK', items: 2, amount: 320, status: 'Pending', date: '2023-06-15' },
  { id: 'ORD-003', product: 'CSIE', items: 5, amount: 780, status: 'Completed', date: '2023-06-14' },
  { id: 'ORD-004', product: 'CICS', items: 1, amount: 150, status: 'Cancelled', date: '2023-06-14' },
  { id: 'ORD-005', product: 'CPET', items: 4, amount: 620, status: 'Completed', date: '2023-06-13' },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    alert('Logged out!');
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-success';
      case 'pending': return 'bg-warning text-dark';
      case 'cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Topbar */}
      <div className="topbar d-flex justify-content-end align-items-center px-3">
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

              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 main-content">
        <h2 className="page-title mb-4 mx-3">Dashboard Overview</h2>

        {/* Cards */}
        <div className="row mb-4 g-3 mx-3 justify-content-center">
          <div className="col-md-4">
            <div className="card bg-warning text-dark p-3 h-100">
              <h3>Total Revenue</h3>
              <p className="amount">₱24,567</p>
              <p className="note">▲ 12% from last month</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning text-dark p-3 h-100">
              <h3>Total Orders</h3>
              <p className="amount">156</p>
              <p className="note">▲ 8% from last month</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0">Recent Orders</h3>
          </div>
          <div className="card-body p-0">
            <table className="table table-hover mb-0">
              <thead className="table-light sticky-top">
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.items}</td>
                    <td>₱{order.amount}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Assign</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
