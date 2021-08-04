import React, {useState} from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

const IngredientsWrap = ({ ingredients }) => {
	const [ingredientsList, setIngredientsList] = useState(ingredients)
	const [available, setAvailable] = useState(true);

	const updateStock = (updatedItem) => {
		ingredientsList.forEach(ingredient => {
			if (ingredient.name === updatedItem) {
					ingredient.stocked = !ingredient.stocked
			}
		});
		setIngredientsList(ingredientsList);
	}

  return (
    <div>
		  {available && <div>You've got all you need!</div>}
      {ingredientsList.map((ingredient) => {
        return (
          <Ingredient
						key={ingredient.name}
            name={ingredient.name}
            quantity={ingredient.quantity}
            stocked={ingredient.stocked}
						toggleStock={updateStock}
          />
        );
      })}
    </div>
  );
};

IngredientsWrap.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      stocked: PropTypes.bool,
    })
  ),
};

export default IngredientsWrap;
