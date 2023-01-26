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
    }
    
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
