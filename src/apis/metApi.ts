import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { MetArtworksIDs } from '../types/MetArtworksIDs';
import { MetArtwork } from '../types/MetArtwork';

const extractIDsArray = (responseData: MetArtworksIDs): number[] =>
  responseData.objectIDs;

export const metApi = createApi({
  reducerPath: 'metApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  }),
  endpoints: (builder) => ({
    getMetArtworksIDsBySearch: builder.query<number[], string>({
      query: (arg) => `search?hasImages=true&q=${encodeURI(arg)}`,
      transformResponse: extractIDsArray,
      keepUnusedDataFor: 80,
    }),
    getAllMetArtworksIDs: builder.query<number[], void>({
      query: () => 'search?hasImages=true&q=""',
      transformResponse: extractIDsArray,
      keepUnusedDataFor: 600,
    }),
    getMetDepartmentArtworksIDs: builder.query<number[], number>({
      query: (departmentID) =>
        `search?hasImages=true&departmentId=${departmentID}&q=""`,
      transformResponse: extractIDsArray,
      keepUnusedDataFor: 300,
    }),
    getMetArtworkByID: builder.query<MetArtwork, number>({
      query: (artworkID) => `objects/${artworkID}`,
    }),
  }),
});

export const {
  useGetAllMetArtworksIDsQuery,
  useGetMetDepartmentArtworksIDsQuery,
  useGetMetArtworkByIDQuery,
  useGetMetArtworksIDsBySearchQuery,
} = metApi;
