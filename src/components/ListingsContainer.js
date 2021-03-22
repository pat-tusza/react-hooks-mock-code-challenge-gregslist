import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings, loadCards, searchCon}) {
  
  const filteredList = listings.filter((listings)=>{
    return listings.description.includes(searchCon)
  })
  console.log(filteredList)

  const alphaList = filteredList.sort((a , b )=> {
    return a.location.localeCompare(b.location)
  })
  console.log(alphaList)
  
  const useableList = alphaList.map((list) => {
    return <ListingCard
            key={list.id}
            id={list.id} 
            image={list.image}
            location={list.location}
            description={list.description}
            loadCards={loadCards}/>
  })
  
  return (
    <main>
      <ul className="cards">
        {useableList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
