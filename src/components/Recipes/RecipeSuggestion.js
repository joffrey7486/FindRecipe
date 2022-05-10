import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";

const RecipeSuggestion = () => {
    const [recipe, setRecipe] = useState({});
    
    const handleClick = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => setRecipe(data.meals[0]))
        .catch(error => console.log(error));
    }

    useEffect(() => console.log(Object.keys(recipe)), [recipe]);

    return (
        <div className="recipe-suggestion">
            <button onClick={handleClick}>Suggestion de recette</button>
            { Object.keys(recipe).length > 0 && <Recipe data={recipe} /> }
        </div>
    )

}

export default RecipeSuggestion;