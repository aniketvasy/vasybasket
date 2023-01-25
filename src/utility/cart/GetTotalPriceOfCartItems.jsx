import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";

const GetTotalPriceOfCartItems = ({id,render}) => {
  const cart = useSelector((state) => state.cart);
  const [totalPrice,setTotalPrice] = useState(0)
  
  useEffect(()=>{
     let itemsTotalPrice = 0;
     if(cart.length){ 
      console.log("cart has data");
      for (const itemCount of cart) {
        itemsTotalPrice+= itemCount.qty * itemCount.price
       } 
       setTotalPrice(itemsTotalPrice);
       console.log("totalPrice",itemsTotalPrice)
     }else{
      setTotalPrice(0);
     }
  },[cart])

  return (
    <>
    {render(Math.round(totalPrice))}
    </>
  )
}

export default GetTotalPriceOfCartItems