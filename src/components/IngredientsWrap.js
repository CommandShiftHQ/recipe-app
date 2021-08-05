import React, {useState} from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

import { IngredientType } from "../types/Ingredient.type";

const IngredientsWrap = ({ ingredients }) => {
	const [ingredientsList, setIngredientsList] = useState(ingredients);
	const [available, setAvailable] = useState(false);

	const toggleStock = (updatedItem) => {
		ingredientsList.forEach((ingredient) => {
			if (ingredient.name === updatedItem) {
				ingredient.stocked = !ingredient.stocked;
			}
		});
		setIngredientsList(ingredientsList);
		const missingIngredients = ingredientsList.filter(
			(ingredient) => ingredient.stocked === false
		);
		missingIngredients.length === 0 ? setAvailable(true) : setAvailable(false);
	};

	return (
		<div>
			{available && <div>Youve got all you need!</div>}
			{ingredientsList.map((ingredient) => {
				return (
					<Ingredient
						key={ingredient.name}
						name={ingredient.name}
						quantity={ingredient.quantity}
						stocked={ingredient.stocked}
						toggleStock={toggleStock}
					/>
				);
			})}
		</div>
	);
};

IngredientsWrap.propTypes = {
	ingredients: PropTypes.arrayOf(IngredientType).isRequired,
};

IngredientsWrap.defaultProps = {
	ingredients: [],
};

export default IngredientsWrap;
