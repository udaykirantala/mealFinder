import { useNavigate } from "react-router-dom"
import "./SearchCard.css"
export const SearchCard = ({meal})=>{
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate(`/cat/${meal.strCategory}`)
    }
    return(
        <div onClick={handleNavigation} className="card-continer">
            <img src={meal.strMealThumb} alt={meal.strCategory} className="card-img-search"/>
            <p className="meal-area">{meal.strArea}</p>
            <p className="meal-name-search">{meal.strMeal}</p>
            <div className="tag-continer">
                <p>{meal.strCategory}</p>
            </div>
        </div>
    )
}