import { useState } from "react";
import "../index.css";

const Search = ({ details, setSearchResults }) => {
  //   const [searchName, setSearchName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    if (!e.target.value) {
      setSearchResults(details);
    }

    const filteredNames = details.filter(function (person) {
      console.log(person);
      return (
        person.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchResults(filteredNames);
  };
  return (
    <>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

export default Search;
