import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, loadCards, searchCon }) {
  //const [deleteID, setDeleteID] = useState(-1);

  function goodbyeItem(id) {
    const minusOneCard = listings.filter((listing) => listing.id !== id);
    setListings(minusOneCard);
  }

  const filteredList = listings.filter((listings) => {
    return listings.description.includes(searchCon);
  });

  const alphaList = filteredList.sort((a, b) => {
    return a.location.localeCompare(b.location);
  });

  const useableList = alphaList.map((list) => {
    return (
      <ListingCard
        key={list.id}
        id={list.id}
        image={list.image}
        location={list.location}
        description={list.description}
        loadCards={loadCards}
        goodbyeItem={goodbyeItem}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{useableList}</ul>
    </main>
  );
}

export default ListingsContainer;
