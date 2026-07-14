import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { Banner } from "../../components/banner/Banner";
import { Card } from "../../components/card/Card";
import { fetchMealCat } from "../../actions/mealCategories";
import "./HomePage.css"
import { Loader } from "../../components/Loader/Loader";
export const HomePage = () => {
    const dispatch = useDispatch()
    const { loading,categories } = useSelector((state) => state.meal);
    useEffect(() => {
        dispatch(fetchMealCat())
    }, [dispatch])

    if(loading){
      return <Loader/>
    }

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