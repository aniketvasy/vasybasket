import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice"
import productsReducer from "./products/productsSlice"
import topBarLoadingReducer from "./loading/topBarLoadingSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer,
        loading:topBarLoadingReducer
    }
})

export default store;
