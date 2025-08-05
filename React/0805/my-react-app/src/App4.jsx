import { useState } from "react";
import data from "./data.jsx";

function App() {
  // console.log(data);
  const [searchKeyword, setSearchKeyword] = useState("");
  const filteredData = data.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  const searchInput = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <>
      <h1>Book List</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={searchInput} />
      {filteredData.map((book, index) => {
        return (
          <section key={index}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </section>
        );
      })}
    </>
  );
}

export default App;
