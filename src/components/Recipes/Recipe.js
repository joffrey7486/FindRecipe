import React from "react";

const Recipe = ({ data }) => {
  const { strMeal, strMealThumb, strSource } = data;

  return (
    <div className="recipe">
      <img src={strMealThumb} alt={strMeal} />
      <h3>{strMeal}</h3>
      <a href={strSource} target="_blank">Voir la recette</a>
    </div>
  );
}

export default Recipe;