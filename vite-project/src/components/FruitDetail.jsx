import React from "react";

const FruitDetail = ({ fruit, onBack }) => {
  return (
    <div className="fruit-detail">
      <button onClick={onBack}>Back to List</button>
      <h1>{fruit.name}</h1>
      <img src={fruit.image} alt={fruit.name} />
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitDetail;
