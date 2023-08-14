import { api } from "./api";
import { IData } from "../../types";


export const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IData, { category?: string; sorted?: string }>({
      query: ({ category = 'all' , sorted = 'relevance'}) => ({
        url: `?q=${category}&orderBy=${sorted}&maxResults=30&key=AIzaSyC7Dn86vDQaufpYmccIEsDVAx7F-s7CNm0`,
        method: "GET",
      }),
    }),
    getBooksByName: builder.mutation<IData, string>({
      query: (name) => ({
        url: `?q=${name}&key=AIzaSyC7Dn86vDQaufpYmccIEsDVAx7F-s7CNm0`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksByNameMutation } = booksApi;

export const {
  endpoints: { getBooks, getBooksByName },
} = booksApi;
