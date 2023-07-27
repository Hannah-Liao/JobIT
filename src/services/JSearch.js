import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jSearchApiKey = import.meta.env.VITE_APP_JSEARCH_KEY;

export const jSearchApi = createApi({
  reducerPath: 'jSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsearch.p.rapidapi.com/',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', jSearchApiKey);
      headers.set('X-RapidAPI-Host', 'jsearch.p.rapidapi.com');
    }
  }),
  endpoints: builder => ({
    getJobListings: builder.query({
      query: query =>
        `search?query=${query.query}&page=${query.page}&num_pages=${query.num_pages}`
    })

    // Rest endpoints
    // getJobListingById: builder.query({
    //   query: (jobId) => `/${jobId}`,
    // }),
  })
});

export const { useGetJobListingsQuery } = jSearchApi;
