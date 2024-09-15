import React from "react";

const FruitCard = ({ fruit, onClick }) => {
  return (
    <div className="fruit-card" onClick={onClick}>
      <img src={fruit.image} alt={fruit.name} />
      <h2>{fruit.name}</h2>
    </div>
  );
};

export default FruitCard;
