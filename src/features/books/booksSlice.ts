import { createSlice } from "@reduxjs/toolkit";
import { booksApi } from "../../app/services/books";
import { RootState } from "../../app/store";
import { IData } from "../../types";


interface InitialState {
    books: IData | null;
  }

  const initialState: InitialState = {
    books: null,
  };

  const slice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addMatcher(booksApi.endpoints.getBooks.matchFulfilled, (state, action) => {
          state.books = action.payload;
        })
        .addMatcher(booksApi.endpoints.getBooksByName.matchFulfilled, (state, action) => {
          state.books = action.payload;
        })
    },
  });

  export default slice.reducer;

export const selectBooks = (state: RootState) =>
  state.books.books;