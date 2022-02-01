import React, { useState } from "react";

const Query = ({ setSearch }) => {
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
    setText("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        id="search-bar"
        value={text}
        required
        placeholder="Search By Name"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-search">Search</button>
    </form>
  );
};

export default Query;
