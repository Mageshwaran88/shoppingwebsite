import React, { useContext, useState } from "react";
import "./Header.css";
import headlogo from "../assets/images.png";
import carticon from "../assets/images (1).png";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext.";

export const Header = () => {
  const [menu, setmenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="header">
      <div className="head-logo">
        <img src={headlogo} />
        <h1>Mageshshop</h1>
      </div>
      <ul className="head-nav">
        <li
          onClick={() => {
            setmenu("home");
          }}
        >
          <Link className="route-link" to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          <Link className="route-link" to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          <Link className="route-link" to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link className="route-link" to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="head-login-cart">
        <Link to="/cart">
          <img src={carticon} />
        </Link>
        <div className="cart-count">{getTotalCartItems()}</div>
        <Link to="./login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};
