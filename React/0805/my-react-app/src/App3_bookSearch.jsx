import { useState } from "react";
import data from "./data.jsx";

function App() {
  // console.log(data);
  const searchResult = useState(data);
  return (
    <>
      <h1>Book List</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
      {data.map((book, index) => {
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
