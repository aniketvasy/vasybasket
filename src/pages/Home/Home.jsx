import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import HomeSection from '../../components/HomeSection'
import ProductList from '../../components/ProductList'
import { saveProducts } from '../../redux/products/productsSlice'
import { setProgress } from "../../redux/loading/topBarLoadingSlice";
import ProductCardSkeletonComponent from "../../components/skeletonComponents/ProductCardSkeletonComponent"

const Home = () => {
const products = useSelector((state)=>state.products);
const loading = useSelector((state) => state.loading);
const dispatch = useDispatch();

  useEffect(() => {
    const getProductList = async () => {
      try {
        dispatch(setProgress({
          progress:50,
          dataFetched:false
        })) 
        const { data: productList } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        console.log("dataaaa==>",productList);
        
        dispatch(saveProducts ({
          data:productList
        }))
        dispatch(setProgress({
          progress:100,
          dataFetched:true
        })) 
      } catch(error){
        console.log("error",error);
      }
    };
    getProductList()
  }, []);
 


  return (
    <>
    <HomeSection heading={"Men's & Women's clothing"}>
   {loading.dataFetched?<ProductList category={["men's clothing","women's clothing"]}/>:<ProductCardSkeletonComponent count={10}/>} 
    </HomeSection>
    <HomeSection heading={"Clothings"}>
   {loading.dataFetched?<ProductList category={["jewelery","electronics"]} />:<ProductCardSkeletonComponent count={10}/>} 
    </HomeSection>
    </>
  )
}

export default Home