import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from '../CSS/navBar.module.css';
import useWindowSize from './../CustomHooks/windowResize';

const NavBar = () => {
    const [width, height] = useWindowSize();

    let flexColumn;
    flexColumn = width < 520 ? "flex-column" : "";

    let dropdownMenuRight;
    dropdownMenuRight = width < 520 ? "" : "dropdown-menu-right";

    return (
        <nav className={`navbar navbar-light ${flexColumn}`} >
            <Link to="/" className="navbar-brand text-white">
                ECommerce Task
            </Link>
            <NavLink to="/products" className="navbar-brand text-white">
                Products
            </NavLink>
            <NavLink to="/login" className="navbar-brand text-white">
                Login
          </NavLink>
            <NavLink to="/register" className="navbar-brand text-white">
                Register
          </NavLink>
            <div className="nav-item dropdown" >
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User
                </Link>
                <div className={`dropdown-menu ${dropdownMenuRight}`} aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item bg-white text-dark" to="action">Action</NavLink>
                    <NavLink className="dropdown-item bg-white text-dark" to="anotherAction">Another action</NavLink>
                    <NavLink className="dropdown-item bg-white text-dark" to="somethingElse">Something else here</NavLink>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;
