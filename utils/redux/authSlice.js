import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = { value: false };

const authSlice = createSlice({
  name: "isAuthenticated",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.isAuthenticated,
      };
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;
export const getIsAuthenticated = (state) => state.isAuthenticated.value;
export default authSlice.reducer;