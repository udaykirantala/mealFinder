import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { Banner } from "../../components/banner/Banner";
import { Card } from "../../components/card/Card";
import { fetchMealCat } from "../../actions/mealCategories";
import "./HomePage.css"
export const HomePage = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.meal);
    useEffect(() => {
        dispatch(fetchMealCat())
    }, [dispatch])
    console.log(categories);
    return (
        <div>
            <div className="home-cards-continer">
                {categories.map((item) => {
                    return <Card foodCat={item} />
                })}
            </div>
        </div>
    )
}