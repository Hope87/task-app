import { IBook } from "../types";

interface BookItemProps {
  book: IBook
}

const BookItem = ({ book }: BookItemProps) => {

  const { imageLinks, title, categories, authors } = book.volumeInfo;

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <img
        className="rounded-t-lg h-60 w-full object-contain"
        src={imageLinks?.thumbnail}
        alt="book img"
      />
      <div className="p-4 flex flex-col gap-4" >
          <h2 className="font-semibold text-sm text-left text-gray-600 underline line-clamp-2">
            {title}
          </h2>

          <h3 className="font-bold text-base text-left">
            {categories && categories[0]}
          </h3>

        <div className="flex">
          {authors &&
            authors.map((author: string) => (

              <h3 className="font-semibold text-xs text-left text-gray-400">
                {author}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
