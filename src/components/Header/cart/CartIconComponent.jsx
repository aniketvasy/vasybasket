import React from 'react'
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import GetTotalPriceOfCartItems from '../../../utility/cart/GetTotalPriceOfCartItems';
import GetTotalQtyOfItemsFromCart from '../../../utility/cart/GetTotalQtyOfItemsFromCart';


const CartIconComponent = () => {
    const cart = useSelector((state) => state.cart);
  return (
    <div className='cart-icon-box-comp'>
    <Link to={"/cart"}>
    <div className="cart-icon-box">
      <BsCart3 className="cart-icon" />
      <div className="cart-icon-qty-and-total">

        <GetTotalQtyOfItemsFromCart 
        render = {
          (value) => <span className="cart-icon-count">{`${value} items`}</span>
        }
        />
        <GetTotalPriceOfCartItems
        render = {
          (value) => <span className="cart-icon-count">₹{` ${value}`}</span>
        }
        />    

        </div>
    </div>
  </Link>
  </div>
  )
}

export default CartIconComponent