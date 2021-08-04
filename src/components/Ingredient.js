import React, { useState } from "react";
import PropTypes from "prop-types";

const Ingredient = ({ name, quantity, stocked }) => {
  const [bought, setBought] = useState(stocked);

  const toggleBought = () => {
    setBought(!bought);
}

  return (
    <div className="ingredient">
      <div className="ingredient-name">{name}</div>
      <div className="ingredient-quantity">{quantity}</div>
      <button className="ingredient-button" type="button" onClick={toggleBought}>
        Toggle stock
      </button>
      {bought && <div className="ingredient-notification">In stock</div>}
    </div>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  stocked: PropTypes.bool,
};

export default Ingredient;
