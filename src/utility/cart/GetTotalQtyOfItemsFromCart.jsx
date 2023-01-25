import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";

const GetTotalQtyOfItemsFromCart = ({id,render}) => {
    const cart = useSelector((state) => state.cart);
    const [totalCartItems,setTotalCartItems] = useState(0)
  
    useEffect(()=>{
       let itemsTotalCount = 0;
       if(cart.length){ 
        console.log("cart has data");
        for (const itemCount of cart) {
          itemsTotalCount += itemCount.qty
         } 
         setTotalCartItems(itemsTotalCount);
       }else{
        setTotalCartItems(0) 
       }
    },[cart])
    return (
      <>
      {render(totalCartItems)}
      </>
    )
}

export default GetTotalQtyOfItemsFromCart