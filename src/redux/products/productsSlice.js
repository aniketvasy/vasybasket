import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    saveProducts(state, action) {
        console.log("state data",action.payload);
      return action.payload.data
    }
}
})

export const {saveProducts} = productsSlice.actions;
export default productsSlice.reducer;
