import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewCosa from "./NewCosa";

function App() {
  const [listings, setListings] = useState([]);
  const [searchCon, setSearchCon] = useState("");

  function loadCards() {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }
  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className="app">
      <Header
        setListings={setListings}
        listings={listings}
        setSearchCon={setSearchCon}
        searchCon={searchCon}
      />
      <ListingsContainer
        listings={listings}
        loadCards={loadCards}
        searchCon={searchCon}
        setListings={setListings}
      />
      <NewCosa setListings={setListings} />
    </div>
  );
}

export default App;
