import React, {useState} from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

const IngredientsWrap = ({ ingredients }) => {
	const [available, setAvailable] = useState(true);

	const updateStock = (event) => {
		console.log(event.target.value);
	}

  return (
    <div>
		  {available && <div>You've got all you need!</div>}
      {ingredients.map((ingredient) => {
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
