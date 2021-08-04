import React from "react";
import IngredientsWrap from "./IngredientsWrap";

const RecipeCard = (props) => {
  const description = props.description;
  const ingredients = props.ingredients;
  const title = props.title;
  const rating = props.rating;

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>Rating: {rating}</h3>

      <IngredientsWrap ingredients={ingredients} />
    </div>
  );
};

export default RecipeCard;
