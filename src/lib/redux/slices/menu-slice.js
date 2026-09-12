import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_API_BASE_URL = process.env.BACKEND_API_BASE_URL;

export const fetchServicesByCategories = createAsyncThunk(
  "services/fetchByCategories",
  async ({ categories, filters }, { rejectWithValue }) => {
    try {
      // categories = "web-development,design,seo"
      //   const categoryArray = categories?.split(",");

      const requests = categories.map((category) =>
        axios
          .get(`${BACKEND_API_BASE_URL}/api/public/service/list`, {
            params: {
              category,
              ...filters,
              // select: "shortTitle slug",
            },
          })
          .then((res) => ({
            [category]: res?.data?.data || [],
          }))
      );

      const results = await Promise.all(requests);

      // Merge into single object
      return results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const serviceSlice = createSlice({
  name: "menus",
  initialState: {
    loading: false,
    servicesByCategory: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesByCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicesByCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesByCategory = action.payload;
      })
      .addCase(fetchServicesByCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default serviceSlice.reducer;
