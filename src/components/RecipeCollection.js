import React from "react";
import RecipeCard from "./RecipeCard";

import "../styles/recipes.css";

// Get recipe JSON data
import recipes from '../recipes.json';

const RecipeCollection = () => {
	return (
		<div className="collection">
			<h1>
				Recipe Collection
			</h1>
			<RecipeCard recipe={recipes[0]}/>
		</div>
	)
}

export default RecipeCollection;
