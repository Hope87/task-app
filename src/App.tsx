import BooksList from "./components/BooksList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <SearchBar />
      <BooksList/>
    </div>
  );
}

export default App;
