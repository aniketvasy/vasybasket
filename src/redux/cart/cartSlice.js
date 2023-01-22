import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      let cartIsEmpty = state.length ? false : true;
      let productIsFound = false;

      if (cartIsEmpty) {
        productIsFound = false;
      } else {
        productIsFound = state.find(
          (cartProduct) => cartProduct.id == action.payload.id
        );
        // console.log("action product0000000", productIsFound);
      }

      if (productIsFound) {
        return state.map((cartProduct) => {
          if (cartProduct.id == action.payload.id) {
            return {
              ...cartProduct,
              qty: cartProduct.qty + 1,
            };
          } else {
            return cartProduct;
          }
        });
      } else {
        state.push({
          ...action.payload,
          qty: 1,
        });
      }
    },

    removeProduct(state, action) {
      let cartIsEmpty = state.length ? false : true;
      let productIsFound = false;

      if (cartIsEmpty) {
        productIsFound = false;
      } else {
        productIsFound = state.find(
          (cartProduct) => cartProduct.id == action.payload.id
        );
        // console.log("action product0000000", productIsFound);
      }

      if (productIsFound) {
        if (productIsFound.qty > 1) {
          return state.map((cartProduct) => {
            if (cartProduct.id == action.payload.id) {
            return {
              ...cartProduct,
              qty: cartProduct.qty - 1,
            };
        }else{
            return cartProduct
        }
          });
        } else {
            return state.filter((cartProduct)=>cartProduct.id!=action.payload.id)
        }
      } else {
        return state;
      }

      // else{
      //     state.push({
      //         ...action.payload,
      //         qty:1
      //      });
      // }
    }
    
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
