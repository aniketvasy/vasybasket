import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import SearchBox from "./SearchBox";
import NavbarLogo from "./NavbarLogo";
import CartIconComponent from "./cart/CartIconComponent";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={loading.progress}
        // onLoaderFinished={() => setProgress()}
      />
      <div className="navbar">
       <NavbarLogo/>
       <SearchBox/>
       <CartIconComponent/>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;