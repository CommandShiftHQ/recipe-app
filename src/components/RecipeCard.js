import React from "react";
import PropTypes from 'prop-types';

import IngredientsWrap from "./IngredientsWrap";

const RecipeCard = ({recipe}) => {
  const {description, ingredients, rating, title} = recipe;

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>Rating: {rating}</h3>

      <IngredientsWrap ingredients={ingredients} />
    </div>
  );
};

RecipeCard.propTypes = {
	recipe: PropTypes.shape({
		description: PropTypes.string,
		ingredients: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			quantity: PropTypes.number,
			stocked: PropTypes.bool
		})),
		rating: PropTypes.number,
		title: PropTypes.string
	})
}

export default RecipeCard;
