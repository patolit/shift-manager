import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "./authApi";

export interface AuthState {
  isAuth: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  isAuth: false,
  status: "idle",
};

export const login = createAsyncThunk("login", async () => {
  const response = await fetchAuth();
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuth = action.payload.data;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
