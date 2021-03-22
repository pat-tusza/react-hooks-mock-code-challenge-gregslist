import React, { useState } from "react";

function NewCosa({ setListings }) {
  const [cosa, setCosa] = useState({
    description: "",
    image: "",
    location: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;

    setCosa({ ...cosa, [key]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(cosa),
    })
      .then((r) => r.json())
      .then((newItem) => setListings((listings) => [...listings, newItem]));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={cosa.description}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="image"
        placeholder="image"
        value={cosa.image}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="location"
        placeholder="location"
        value={cosa.location}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewCosa;
