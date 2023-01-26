import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import uniqid from 'uniqid';

const ProductCardSkeletonComponent = ({count}) => {
  return (
    <div className="product-list" id="product-list" >
    {Array(count).fill(0).map(item => 
    <div className="product-card-skeleton" key={uniqid()}>

        <div className="product-image-skeleton-comp">
            <Skeleton width={194} height={154}/>
        </div>
        <div className="product-title-skeleton-comp">
        <Skeleton width={188} height={15}/>
        <Skeleton width={150} height={15}/>
        </div>
        <div className="product-price-and-buy-skeleton-comp">
            <div className="product-price-skeleton-comp">
            <Skeleton width={66} height={25} />
            </div>
            <div className="product-buy-skeleton-comp">
            <Skeleton width={90} height={36}/>
            </div>
        </div>
   </div>
  )}
  </div>
   
  );
};

export default ProductCardSkeletonComponent;
