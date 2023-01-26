import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import {addProduct, removeProduct} from "../redux/cart/cartSlice";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";


const ProductCard = ({ id, title, price, category, description, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  const [productCount,setProductCount] = useState(0);

  useEffect(()=>{
    if(cart.length>0){
      const thisProductInCart = cart.find((cartProduct)=>{
       
        if(cartProduct.id==id){
          return true
        }
        else{
          return false
        }
      })
      thisProductInCart?setProductCount(thisProductInCart.qty):setProductCount(0);
    }else{
      setProductCount(0)
    }
  },[cart])

  return <div className="product-card">
    <div className="product-card-image-compo">
    <img src={`${image}`} className="product-card-image"/>
    </div>
    <div className="product-info">
    <div className="product-card-title">{title.slice(0,40)}{ `${title.length>40?"...":""}`}</div>
    <div className="price-and-buy-button">
    <div className="product-card-price">{`₹${price}`}</div>
    <div className="product-buy-button-compo">
      {
        productCount?

        <div className="product-set-qty-button product-set-qty-button-active " >
          <div className="remove-product-icon-box add-and-remove-icon" onClick={()=>dispatch(removeProduct ({
          id:id,
          title:title
        }))}><HiMinus className="add-product-icon"/></div>
          <span className="product-qty-box">{productCount}</span>
          <div className="add-product-icon-box add-and-remove-icon" onClick={()=>dispatch(addProduct ({
          id:id,
          title:title,
          price:price
        }))}><HiPlus className="remove-product-icon"/></div>
        </div>
        :
         <button className="product-buy-button " onClick={()=>dispatch(addProduct({
          id:id,
          title:title,
          price:price
        }))}> Add </button>
      }
     
    </div>
    </div>

 
    </div>
  </div>;
};

export default ProductCard;
