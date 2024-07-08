import React, { useState, useEffect } from "react";
import CardList from "./CardList";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://www.course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  function deleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div className="container">
      <h1 className="tours-heading">Our Tours</h1>
      <CardList cards={cards} onDelete={deleteCard} />
    </div>
  );
}

export default App;
