import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "~/lib/redux/slices/blog-slice";
import menuReducer from "~/lib/redux/slices/menu-slice";

export function makeStore() {
  return configureStore({
    reducer: {
      blog: blogReducer,
      menus: menuReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
