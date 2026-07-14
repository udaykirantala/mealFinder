import "./MealDetailsCard.css"
export const MealDetailsCard = ({ meal }) => {
    const mealCat = meal?.strCategory?.toUpperCase();
    const mealSource = meal?.strSource
    const sourceText = mealSource
        ? mealSource.length > 39
            ? `${mealSource.slice(0, 45)}...`
            : mealSource
        : "N/A";
    const mealTages = meal?.strTags || []

    const mealTagesArray = mealTages.length != 0 ? mealTages.split(",") : []

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
                ingredient,
                measure,
            });
        }
    }
    return (
        <div className="meal-details-card-continer">
            <div className="meal-details-card-img">
                <img src={meal?.strMealThumb} alt={meal?.idMeal} />
            </div>
            <div className="meal-content">
                <h3 className="meal-name">{meal?.strMeal}</h3>
                <div className="meal-cat-source">
                    <p>CATEGORY <span className="secondary-content">{` : ${mealCat}`}</span></p>
                    <p>Source<span className="secondary-content">{` : ${sourceText}`}</span></p>
                </div>
                <div className="meal-tags-continer">
                    <p className="tag-heding">Tags:</p>
                    <div className="tags-items-continer">
                        {mealTagesArray.length > 0 ? (
                            mealTagesArray.map((item) => (
                                <p key={item} className="tags-items">{item}</p>
                            ))
                        ) : (
                            <p>N/A</p>
                        )}
                    </div>
                </div>
                <div className="meal-ingredients">
                    <h3>ingredients</h3>
                    <div className="meal-ingredients-items-continer">
                        {ingredients.map((item, index) => (
                            <div className="meal-ingredients-items">
                                <span className="item-index">{index + 1}</span>
                                <p>{item.ingredient}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}