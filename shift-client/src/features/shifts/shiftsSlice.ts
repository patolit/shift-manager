import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getShifts } from "../../services/api/fetchShifts";

export interface ShiftState {
  availableShifts: any;
  status: "idle" | "loading" | "failed";
}

const initialState: ShiftState = {
  availableShifts: [],
  status: "idle",
};

export const getShiftsAsync = createAsyncThunk(
  "getavailableShifts",
  async () => {
    const response = await getShifts();
    return response.data;
  }
);

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShiftsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getShiftsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.availableShifts = action.payload;
      });
  },
});

export default shiftsSlice.reducer;
