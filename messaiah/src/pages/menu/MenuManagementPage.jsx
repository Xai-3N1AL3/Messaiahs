import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MenuManagement.css';

const categories = ['All Items', 'Chaopan', 'Snacks', 'Bilao', 'Platter', 'Sandwich'];

const menuItems = [
  {
    id: 1,
    name: 'Ube Turon',
    price: 135,
    image: 'src/assets/image copy 2.png',
    available: true,
  },
  {
    id: 2,
    name: 'Cheesesticks',
    price: 135,
    image: 'src/assets/image copy.png',
    available: true,
  },
  {
    id: 3,
    name: 'Chicken Sisig',
    price: 135,
    image: 'src/assets/image copy 3.png',
    available: false,
  },
  {
    id: 4,
    name: 'CCB - Chaopan Cordon Blue',
    price: 135,
    image: 'src/assets/image.png',
    available: true,
  },
  {
    id: 5,
    name: 'Lechon Kawali',
    price: 135,
    image: 'src/assets/image copy 4.png',
    available: false,
  },
  {
    id: 6,
    name: 'Sandwich',
    price: 135,
    image: 'src/assets/image copy 6.png',
    available: true,
  },
  {
    id: 7,
    name: 'Bilao',
    price: 135,
    image: 'src/assets/image copy 8.png',
    available: false,
  },
  {
    id: 8,
    name: 'Baked Cheese',
    price: 135,
    image: 'src/assets/image copy 7.png',
    available: false,
  },
];

const MenuManagement = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [activeCategory, setActiveCategory] = useState('Chaopan');

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-0 main-content">
          {/* Topbar */}
          <nav className="topbar d-flex justify-content-end align-items-center px-3">
            <div className="d-flex align-items-center gap-3">
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
          </nav>

          {/* Menu Header */}
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
                  <button className={`status-btn ${item.available ? 'active' : 'inactive'}`}>
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
    </div>
  );
};

export default MenuManagement;
