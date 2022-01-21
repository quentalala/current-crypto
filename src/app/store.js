import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  // Have to specify the reducer path
  // For every reducer that you create
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
