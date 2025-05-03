import { useNavigate, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header flex justify-between pl-20 pr-20">
      <div>
        <h1>Helix</h1>
      </div>
      <div className="gap-10 flex"> 
        <NavLink to="#about">About us</NavLink>
        <NavLink to="/about">Home</NavLink>
        <NavLink to="#about">About us</NavLink>
        <NavLink to="/about">Home</NavLink>
      </div>
    </div>
  );
}

export default Header;
