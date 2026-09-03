import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        <Link to="/" className="logo">
          Amatera Florist
        </Link>

        <nav className="desktop-nav">
          <Link to="/categories">Categories</Link>
          <Link to="/products">Product</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
           <Link to="/cart" className="icon-button cart-button" aria-label="Cart">
           🛍
           <span className="cart-count">0</span>
           </Link>
           </div>
      </div>
    </header>
  );
}

export default Navbar;