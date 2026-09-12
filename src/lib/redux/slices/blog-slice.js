import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_API_BASE_URL = process.env.BACKEND_API_BASE_URL;

// Fetch blogs grouped by type
export const fetchBlogsByTypes = createAsyncThunk(
  "blogs/fetchByTypes",
  async ({ types, filters }) => {
    const promises = types.map((type) =>
      axios
        .get(`${BACKEND_API_BASE_URL}/api/public/blog`, {
          params: { type, ...filters },
        })
        .then((res) => ({
          type,
          data: res?.data?.data,
        }))
    );

    const results = await Promise.all(promises);

    // Normalize: { type: [...] }
    const normalized = {};
    results.forEach(({ type, data }) => {
      normalized[type] = data;
    });

    return normalized;
  }
);

/**
 * Fetch blogs by categories
 * This calls the API for each category separately
 */
export const fetchBlogsByCategories = createAsyncThunk(
  "blogs/fetchByCategories",
  async ({ categories, filters }) => {
    const requests = categories.map((category) =>
      axios
        .get(`${BACKEND_API_BASE_URL}/api/public/blog`, {
          params: { category, ...filters },
        })
        .then((res) => ({
          category,
          data: res.data.data,
        }))
    );

    const results = await Promise.all(requests);

    // Normalized result: { categoryName: [...] }
    return results.reduce((acc, { category, data }) => {
      acc[category] = data;
      return acc;
    }, {});
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    postListTypeWise: [],
    menusByCategory: [],
    dataLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsByTypes.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogsByTypes.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.postListTypeWise = {
          ...state.postListTypeWise,
          ...action.payload,
        };
      })
      .addCase(fetchBlogsByTypes.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.error.message;
      });

    // By Categories
    builder
      .addCase(fetchBlogsByCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogsByCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.menusByCategory = action.payload;
      })
      .addCase(fetchBlogsByCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
