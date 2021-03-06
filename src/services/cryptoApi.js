import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_COINRANK_API_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// function adds the url and headers to the request

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  // reducerPath: What is this reducer for?
  baseQuery: fetchBaseQuery({ baseUrl }),
  //   fetchBaseQuery() accepts an object, which you've destructured above
  endpoints: (builder) => ({
    //   builder instantly returns an object, where you can specify the endpoints
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
      //   arrow function points to the request you want
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
// redux toolkit creates a hook you can instantly call to get the data for your query
// in this case you have getCryptos as the end point
// so you prepend 'use' and append 'Query' to the endpoint name
