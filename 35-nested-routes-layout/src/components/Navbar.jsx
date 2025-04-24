import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
