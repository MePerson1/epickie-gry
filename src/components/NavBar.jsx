import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-secondary shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Gry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Aktualności
              </NavLink>
            </li>
            <li>
              <button className="btn btn-outline">Zmień motyw</button>
            </li>
            <li>
              <button className="btn btn-outline">Zmień czcionkę</button>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Epickie Gry
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Gry
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Aktualności
            </NavLink>
          </li>
          <li>
            <button className="btn btn-outline">Zmień motyw</button>
          </li>
          <li>
            <button className="btn btn-outline">Zmień czcionkę</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login" className="btn">
          Zaloguj
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
