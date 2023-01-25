import { createSlice } from "@reduxjs/toolkit";

const topBarLoadingSlice = createSlice({
  name: "topBarLoading",
  initialState: {
    progress:0,
    dataFetched:false
  },
  reducers: {
    setProgress(state, action) {
      // alert(action.payload.progress)
        return{
          ...state,
          progress:action.payload.progress,
          dataFetched:action.payload.dataFetched
        }
    },
  },
});

export const {setProgress} = topBarLoadingSlice.actions;
export default topBarLoadingSlice.reducer;
