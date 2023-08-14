import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { selectBooks } from "../features/books/booksSlice";
import { IBook } from "../types";

const BooksList = () => {
  const books = useSelector(selectBooks);

 
  return (
    <>
      <h2 className="text-center mt-10">Found {books?.totalItems} results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 mb-10">
        {books?.items.map((book: IBook) => (
          <BookItem book={book} key={book.id}/>
        ))}
      </div>
    </>
  );
};

export default BooksList;
