import PropTypes from "prop-types";

export const IngredientType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	stocked: PropTypes.bool.isRequired,
});
