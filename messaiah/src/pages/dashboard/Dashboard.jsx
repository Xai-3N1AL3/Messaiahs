import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';

const orders = [
  { id: 'ORD-001', product: 'CCB', items: 3, amount: 450, status: 'Completed', date: '2023-06-15' },
  { id: 'ORD-002', product: 'CLICK', items: 2, amount: 320, status: 'Pending', date: '2023-06-15' },
  { id: 'ORD-003', product: 'CSIE', items: 5, amount: 780, status: 'Completed', date: '2023-06-14' },
  { id: 'ORD-004', product: 'CICS', items: 1, amount: 150, status: 'Cancelled', date: '2023-06-14' },
  { id: 'ORD-005', product: 'CPET', items: 4, amount: 620, status: 'Completed', date: '2023-06-13' },
];

const Dashboard = () => {
  const getStatusBadgeClass = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-success';
      case 'pending': return 'bg-warning text-dark';
      case 'cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Sidebar */}
      <div className="sidebar bg-warning" style={{ width: '240px', flexShrink: 0 }}>
        <div className="p-3">
          <h1 className="logo">☕ Messiah's Admin</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link active">📋 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">🍽️ Menu Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/salesreport" className="nav-link">📊 Sales Reports</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">⚙️ Settings</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1 d-flex flex-column" style={{ overflow: 'auto' }}>
        <div className="p-4">
          <h2 className="page-title mb-4">Dashboard Overview</h2>

          {/* Summary Cards */}
          <div className="row mb-4 g-3">
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

          {/* Orders Table */}
          <div className="card flex-grow-1 d-flex flex-column">
            <div className="card-header">
              <h3 className="mb-0">Recent Orders</h3>
            </div>
            <div className="card-body p-0 flex-grow-1" style={{ overflow: 'auto' }}>
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
                      <td><button className="btn btn-primary btn-sm">Assign</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;