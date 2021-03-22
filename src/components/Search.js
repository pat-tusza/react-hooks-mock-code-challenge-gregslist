import React, {useState} from "react";

function Search({searchCon, setSearchCon}) {
  
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch(e){
    setSearchCon(e.target.value)  
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchCon}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
