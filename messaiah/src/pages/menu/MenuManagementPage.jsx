import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MenuManagement.css';

const categories = ['All Items', 'Chaopan', 'Snacks', 'Bilao', 'Platter', 'Sandwich'];

const initialMenuItems = [
  { id: 1, name: 'Ube Turon', price: 183, image: 'src/assets/image copy 2.png', available: true, category: 'Snacks' },
  { id: 2, name: 'Cheesesticks', price: 78, image: 'src/assets/image copy.png', available: true, category: 'Snacks' },
  { id: 3, name: 'Chicken Sisig', price: 123, image: 'src/assets/image copy 3.png', available: false, category: 'Chaopan' },
  { id: 4, name: 'CCB - Chaopan Cordon Blue', price: 122, image: 'src/assets/image.png', available: true, category: 'Chaopan' },
  { id: 5, name: 'Lechon Kawali', price: 102, image: 'src/assets/image copy 4.png', available: false, category: 'Chaopan' },
  { id: 6, name: 'Sandwich', price: 129, image: 'src/assets/image copy 6.png', available: true, category: 'Sandwich' },
  { id: 7, name: 'Bilao', price: 135, image: 'src/assets/bilao1.jpg', available: false, category: 'Bilao' },
  { id: 8, name: 'Baked Mac', price: 174, image: 'src/assets/image copy 7.png', available: false, category: 'Platter' },
  { id: 9, name: 'Cordon', price: 148, image: 'src/assets/cordon.jpg', available: false, category: 'Chaopan' },
  { id: 10, name: 'Lasagna', price: 165, image: 'src/assets/lasagna.jpg', available: true, category: 'Platter' },
  { id: 11, name: 'Palabok', price: 105, image: 'src/assets/palabok.jpg', available: true, category: 'Bilao' },
  { id: 12, name: 'Fries', price: 75, image: 'src/assets/snack1.jpg', available: false, category: 'Snacks' },
  { id: 13, name: 'Platter-Wings', price: 138, image: 'src/assets/platterwings.jpg', available: true, category: 'Platter' },
];

const MenuManagement = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [editItem, setEditItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    navigate('/');
    alert('Logged out!');
  };

  const openEditModal = (item) => {
    setEditItem(item);
    new window.bootstrap.Modal(document.getElementById('editModal')).show();
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditItem({
      ...editItem,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditSubmit = () => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === editItem.id ? editItem : item))
    );
    window.bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12 col-md-9 col-lg-10 p-0 main-content">
          <nav className="topbar">
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

          <h2 className="menu-header">Menu</h2>

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

          <div className="menu-items">
            {menuItems
              .filter(item => activeCategory === 'All Items' || item.category === activeCategory)
              .map((item) => (
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
                      <button onClick={() => openEditModal(item)}><i className="bi bi-pencil-square"></i></button>
                      <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Edit Modal */}
          <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
              {editItem && (
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Product</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editItem.name}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={editItem.price}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="availableCheck"
                        name="available"
                        checked={editItem.available}
                        onChange={handleEditChange}
                      />
                      <label className="form-check-label" htmlFor="availableCheck">
                        Available
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleEditSubmit}>
                      Save changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
