import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar bg-warning">
      <div className="p-3">
        <h1 className="logo">☕ Messiah's Admin</h1>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">📋 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">⚙️ Settings</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">🍽️ Menu Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/salesreport" className="nav-link">📊 Sales Reports</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar