import React from 'react';
import RecipeCard from './RecipeCard';

import '../styles/recipes.css';

const RecipeCollection = () => {
    return (
        <div className="collection">
            <h1>
                Recipe Collection
            </h1>
            <RecipeCard />
        </div>
    )
}

export default RecipeCollection
