import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          wonder
        </div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Our work</a></li>
          <li><a href="#contact">Get in touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
