import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3 className="logo">B100DYBOOKING</h3>
        <div className="nav-btn-container">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </div>
  );
}
