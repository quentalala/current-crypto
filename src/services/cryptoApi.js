import axios from "axios";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_COINRANK_API_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges";

const createRequest = (url) => (url, headers: cryptoApiHeaders)

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  // reducerPath: What is this reducer for?
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
      getCryptos: builder.query({
          query: () => createRequest('/exchanges')
      })
  })
});
