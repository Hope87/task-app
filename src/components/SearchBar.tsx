import { useRef, useState } from "react";
import CustomFilter from "../UI/CustomFilter";
import { useGetBooksByNameMutation, useGetBooksQuery } from "../app/services/books";
import {booksCategory, booksSortedBy} from '../options'



const SearchBar = () => {
  const [category, setCategory] = useState(booksCategory[0]);
  const [sortedBy, setSortedBy] = useState(booksSortedBy[0]);

  const inputRef = useRef<any>(null);


  const { isLoading } = useGetBooksQuery({
    category: category.name,
    sorted: sortedBy.name,
  });

  const [getBook] = useGetBooksByNameMutation()

  if(isLoading){
    return <p>Loading...</p>
  }



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getBook(inputRef.current?.value)
    setCategory(booksCategory[0])
    setSortedBy(booksSortedBy[0])
  };
  
  return (
    <div className="search-bar">
      <h1 className="mt-10 mb-10 text-white text-center text-4xl">
        Search For Books
      </h1>
      <div className="flex items-center justify-start flex-col w-full relative max-sm:gap-4 max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full flex justify-start items-center relative"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Your Book Name"
            className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-full outline-none cursor-pointer text-sm"
          />
          <button type="submit" className="absolute right-0">
            <img
              src="./magnifying-glass.svg"
              alt="magnifying glass"
              className="object-contain"
            />
          </button>
        </form>

        <div className="flex flex-col items-center sm:justify-around w-full mt-5 sm:flex-row">
          <CustomFilter
            title="Categories"
            options={booksCategory}
            selected={category}
            setSelected={setCategory}
          />
          <CustomFilter
            title="Sorting By"
            options={booksSortedBy}
            selected={sortedBy}
            setSelected={setSortedBy}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
