import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
// linking the services to the store

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});

// inside the reducer object, in square brackets
// have to specify the reducer path
// for every reducer you create
