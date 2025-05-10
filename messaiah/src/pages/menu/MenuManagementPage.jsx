import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MenuManagement.css'; // your custom CSS file

const categories = ['All Items', 'Chaopan', 'Snacks', 'Bilao', 'Platter', 'Sandwich'];

const menuItems = [
  {
    id: 1,
    name: 'CCB - Chaopan Cordon Blue',
    price: 135,
    image: 'src/assets/chaopan1.jpg',
    available: true,
  },
  {
    id: 2,
    name: 'CCB - Chaopan Cordon Blue',
    price: 135,
    image: 'src/assets/chaopan2.jpg',
    available: true,
  },
  {
    id: 3,
    name: 'CCB - Chaopan Cordon Blue',
    price: 135,
    image: 'src/assets/chaopan3.jpeg',
    available: false,
  },
];

const MenuManagement = () => {
  const [activeCategory, setActiveCategory] = useState('Chaopan');

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Sidebar */}
      <div className="sidebar bg-warning" style={{ width: '240px', flexShrink: 0 }}>
        <div className="p-3">
          <h1 className="logo">☕ Messiah's Admin</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">📋 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link active">🍽️ Menu Management</Link>
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
      <div className="menu-container flex-grow-1">
        <h2 className="menu-header">Menu</h2>

        {/* Category Tabs */}
        <div className="menu-tabs">
          <div className="menu-tab-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === activeCategory ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} />
              <div className="menu-info">
                <h4>{item.name}</h4>
                <p>₱{item.price.toFixed(2)}</p>
              </div>
              <div className="menu-actions">
                <button
                  className={`status-btn ${item.available ? 'active' : 'inactive'}`}
                >
                  {item.available ? 'Available' : 'Not Available'}
                </button>
                <div className="icon-btns">
                  <button><i className="bi bi-pencil-square"></i></button>
                  <button><i className="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
