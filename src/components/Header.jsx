import { useNavigate, NavLink } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle';

function Header() {
  return (
    <div className="header flex justify-between pl-20 pr-20 h-16 items-center">
      <div>
        <h1 className="brand-title">Helix.</h1>
      </div>
      <div className="gap-10 flex items-center"> 
        <NavLink to="#about" className={`font-normal`}>About us</NavLink>
        <NavLink to="/about">Home</NavLink>
        <NavLink to="#about">About us</NavLink>
        <NavLink to="/about">Home</NavLink>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
