import React from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

const IngredientsWrap = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return (
          <Ingredient
						key={ingredient.name}
            name={ingredient.name}
            quantity={ingredient.quantity}
            stocked={ingredient.stocked}
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
