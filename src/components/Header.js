import React from "react";
import Search from "./Search";

function Header({setListings, listings, searchCon, setSearchCon}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      setSearchCon={setSearchCon}
      searchCon={searchCon}
       />
    </header>
  );
}

export default Header;
