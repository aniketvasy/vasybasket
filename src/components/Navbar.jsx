import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

export const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const loading = useSelector((state) => state.loading);

  // useEffect(()=>{
  //     let total = 0;
  //     for (const product of cart) {
  //         total = product.
  //     }
  //     setTotal()
  // },[cart])
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={loading.progress}
        // onLoaderFinished={() => setProgress()}
      />
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src="images/logo_vasyerp_nav.png" className="logo-img" />
          </div>
        </Link>
        <nav className="menu">
          <Link to={"/"}>
            <p className="nav-names nav-home">Home</p>
          </Link>
          <Link to={"/"}>
            <p className="nav-names nav-products">Products</p>
          </Link>
          <Link to={"/"}>
            <p className="nav-names nav-aboutUs">About Us</p>
          </Link>
          <Link to={"/"}>
            <p className="nav-names nav-contactUs">Contact Us</p>
          </Link>
        </nav>
        <Link to={"/cart"}>
          <div className="cart-icon-box">
            <BsCart3 className="cart-icon" />
            <p className="cart-icon-count-and-total">
              <span className="cart-icon-count">{`${cart.length} items`}</span>
              <span className="cart-icon-total">{`${cart.length} items`}</span>
            </p>
          </div>
        </Link>
      </div>

      <Outlet />
    </>
  );
};
