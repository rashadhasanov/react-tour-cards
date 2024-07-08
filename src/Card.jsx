import React, { useState } from "react";

function Card({ card, onDelete }) {
  const [showText, setShowText] = useState(false);

  function handleDelete() {
    onDelete(card.id);
  }

  return (
    <div className="card">
      <div className="img-container">
        <img src={card.image} alt={card.name} />
        <div className="price">$ {card.price}</div>
      </div>
      <div className="card-desc">
        <p className="card-title">{card.name}</p>
        <p className="card-body">
          {showText ? card.info : `${card.info.substring(0, 150)}...`}
          <button
            className="read-show-btn"
            onClick={() => setShowText(!showText)}
          >
            {showText ? "Show less" : " Read more"}
          </button>
        </p>
        <button className="clear-btn" onClick={handleDelete}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
