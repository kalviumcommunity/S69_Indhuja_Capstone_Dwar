import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input type="text" placeholder="Search for causes..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default SearchBar;
