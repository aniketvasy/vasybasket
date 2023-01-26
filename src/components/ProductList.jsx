import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = ({category}) => {
  const [ProductListComponent, setProductListComponent] = useState([]);
  const products = useSelector((state)=>state.products);

  useEffect(()=>{
    console.log("products inside",products)
    setProductListComponent(products.filter((item)=>item.category==category[0]||item.category==category[1]).map((item)=>{
      console.log("product",item);
      return(
          <ProductCard
          key={item.id}
          id= {item.id}
          title= {item.title}
          price= {item.price}
          category= {item.category}
          description= {item.description}
          image= {item.image}
          qty={0}                 
          />
      )
  })) 
  },[])

console.log("producs",products)
console.log("products list",ProductListComponent);
  return (
    <>
      <div className="product-list" id="product-list" >
        {ProductListComponent}
      </div>
    </>
  );
};

export default ProductList;
