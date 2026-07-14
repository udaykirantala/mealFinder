import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchMealCat } from "../../actions/mealCategories";
import './CategoryPage.css'
import { fetchMealByName } from "../../actions/mealByNameAction";
import { MealCard } from "../../components/mealCard/MealCard";
import { Loader } from "../../components/Loader/Loader";
export const CategoryPage = () => {
    const dispatch = useDispatch();
    const {loading, categories } = useSelector((state) => state.meal)
    const { meals } = useSelector((state) => state.mealbyName)
    const { category } = useParams()

    useEffect(() => {
        dispatch(fetchMealCat())
        dispatch(fetchMealByName({ foodName: categories }))
    }, [dispatch])
    const catDescription = categories.find(
        (item) => item.strCategory === category
    );
    if(loading){
        return <Loader/>
    }
    return (
        <div className="cat-continer">
            <div className="cat-dis-continer">
                <h3>{catDescription?.strCategory}</h3>
                <p>{catDescription?.strCategoryDescription}</p>
            </div>
            <div className="cat-meal-cards-continer">
                <h3>Meals</h3>
                <div className="meal-by-name-continer">
                    {meals.map((item) => (
                        <MealCard meal={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}