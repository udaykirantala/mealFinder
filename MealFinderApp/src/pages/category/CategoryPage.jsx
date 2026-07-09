import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchMealCat } from "../../actions/mealCategories";
import './CategoryPage.css'
import { fetchMealByName } from "../../actions/mealByNameAction";
import { MealCard } from "../../components/mealCard/MealCard";
export const CategoryPage = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.meal)
    const { meals } = useSelector((state) => state.mealbyName)
    const { category } = useParams()

    useEffect(() => {
        dispatch(fetchMealCat())
        dispatch(fetchMealByName({ foodName: categories }))
    }, [dispatch])
    const catDescription = categories.find(
        (item) => item.strCategory === category
    );
    console.log(catDescription?.strCategoryDescription);
    console.log(category);
    console.log(meals);



    return (
        <div>
            <div className="cat-dis-continer">
                <h3>{catDescription?.strCategory}</h3>
                <p>{catDescription?.strCategoryDescription}</p>
            </div>
            <div>
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