import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <div className="brand">Little Lemon</div>
        <ul className="navList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
        </ul>
      </nav>
    </header>
  );
}
