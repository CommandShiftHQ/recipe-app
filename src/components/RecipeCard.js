import React from "react";
import PropTypes from 'prop-types';

import { IngredientType } from "../types/Ingredient.type"
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
		description: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(IngredientType).isRequired,
		title: PropTypes.string,
		rating: PropTypes.number,
	}),
};

RecipeCard.defaultProps = {
	recipe: PropTypes.shape({
		ratings: 1,
	}),
};

export default RecipeCard;
