import Search from "./components/Search";
import Card from "./components/Card";
import "../src/index.css";
import { useState } from "react";
import data from "./data";
console.log(data);

function App() {
  const [details, setDetails] = useState(data);
  const [searchResults, setSearchResults] = useState(data);
  return (
    <>
      <div className="container">
        <Search details={details} setSearchResults={setSearchResults} />
        <Card searchResult={searchResults} />
      </div>
    </>
  );
}

export default App;
