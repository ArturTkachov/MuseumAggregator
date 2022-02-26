import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  WikiSearchItem,
  WikiSearchResponse,
} from '../types/WikiSearchResponse';
import { WikiPageResponse, WikiPage } from '../types/WikiPageResponse';

export const wikiApi = createApi({
  reducerPath: 'wikiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://en.wikipedia.org/w/',
  }),
  endpoints: (builder) => ({
    getWikiSearchResults: builder.query<WikiSearchItem[], string>({
      query: (arg) =>
        `api.php?action=query&list=search&srsearch=${encodeURI(
          arg
        )}&origin=*&utf8=&format=json`,
      transformResponse: (responseData: WikiSearchResponse) =>
        responseData.query.search,
    }),
    getWikiPageByID: builder.query<WikiPage, number>({
      query: (arg) =>
        `api.php?action=query&prop=extracts&exlimit=3&pageids=${arg}&origin=*&format=json`,
      transformResponse: (responseData: WikiPageResponse, meta, arg) =>
        responseData.query.pages[arg],
    }),
  }),
});

export const { useGetWikiSearchResultsQuery, useGetWikiPageByIDQuery } =
  wikiApi;
