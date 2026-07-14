import "./MealCard.css"
import { useNavigate } from "react-router-dom"

export const MealCard = ({ meal }) => {
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate(`/meal/${meal.idMeal}`)
    }
    return (
        <div className="meal-card-continer" onClick={handleNavigation}>
            <div className="meal-card-img-container">
                <img src={meal.strMealThumb} alt={meal.idMeal} />
            </div>
            <p>{meal.strMeal}</p>
        </div>
    )
}