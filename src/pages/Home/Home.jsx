import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import HomeSection from '../../components/HomeSection'
import ProductList from '../../components/ProductList'
import { saveProducts } from '../../redux/products/productsSlice'
import { setProgress } from "../../redux/loading/topBarLoadingSlice";
import HashLoader  from "react-spinners/HashLoader ";




const Home = () => {
const products = useSelector((state)=>state.products);
// const [progress, setProgress] = useState(50)
const loading = useSelector((state) => state.loading);
const dispatch = useDispatch();

  useEffect(() => {
    const getProductList = async () => {
      try {
        dispatch(setProgress({
          progress:50,
          dataSaved:false
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
          dataSaved:true
        })) 
        // dispatch(setProgress({progress:90})) 
        // setProductListComponent(productList.filter((item)=>item.category=="men's clothing"||item.category=="women's clothing").map((item)=>{
        //     console.log("product",item);
        //     return(
        //         <ProductCard
        //         key={item.id}
        //         id= {item.id}
        //         title= {item.title}
        //         price= {item.price}
        //         category= {item.category}
        //         description= {item.description}
        //         image= {item.image}
        //         qty={0}                        ///////////// setting 0 QTY 
        //         />
        //     )
        // })) 
      } catch(error){
        // alert(`Please Fix Axios "https://fakestoreapi.com/products" at Home Component`)
        console.log("error",error);
      }
    };
    getProductList()
  }, []);



  return (
    <>

    <HomeSection>
   {loading.dataSaved?<ProductList/>:<div className="loading-home-page"><HashLoader color="#00A81C" /></div>} 
    </HomeSection>
    </>
  )
}

export default Home