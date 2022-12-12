import React from "react";
import { NavLink } from "react-router-dom";
import im from "./pataka.jpg";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <img
              className="product-item-img"
              src={im}
              alt="Flowers in Chania"
            ></img>
          </li>
          <li>
            <NavLink to="/" exact>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
