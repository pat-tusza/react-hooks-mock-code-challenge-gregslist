import React, { useState } from "react";

function ListingCard({ image, description, location, goodbyeItem, id }) {
  const [favButton, setFavButton] = useState(false);

  function handleFavClick() {
    setFavButton(!favButton);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    goodbyeItem(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favButton ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
