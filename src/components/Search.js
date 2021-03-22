import React, {useState} from "react";

function Search({setListings}) {
  const [searchCon, setSearchCon] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch(e){
    setSearchCon(e.target.value)
    setListings((listings)=>{
      listings.filter((list)=>{
       return list.description.includes(searchCon)
      })
    })
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
