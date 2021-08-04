import React from "react";
import PropTypes from 'prop-types';

const Ingredient = ({ name, quantity, stocked }) => {
  return (
    <div className="ingredient">
      <div className="ingredient-name">{name}</div>
      <div className="ingredient-quantity">{quantity}</div>
      {stocked && <div>Stocked</div>}
    </div>
  );
};

Ingredient.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    stocked: PropTypes.bool
}

export default Ingredient;
