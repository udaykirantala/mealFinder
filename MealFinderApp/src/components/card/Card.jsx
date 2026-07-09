import { useNavigate } from "react-router-dom"
import "./Card.css"
export const Card = ({foodCat})=>{
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate(`/cat/${foodCat.strCategory}`)
    }
    return(
        <div onClick={handleNavigation} className="card-continer">
            <img src={foodCat.strCategoryThumb} alt={foodCat.strCategory}/>
            <div className="tag-continer">
                <p>{foodCat.strCategory}</p>
            </div>
        </div>
    )
}