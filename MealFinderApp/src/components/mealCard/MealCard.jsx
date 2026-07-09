import "./MealCard.css"
export const MealCard = ({ meal }) => {
    return (
        <div className="meal-card-continer">
            <div className="meal-card-img-container">
                <img src={meal.strMealThumb} alt={meal.idMeal} />
            </div>
            <p>{meal.strMeal}</p>
        </div>
    )
}