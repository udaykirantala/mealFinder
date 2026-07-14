import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealDetails } from "../../actions/mealDetailsAction";
import { useParams } from "react-router-dom"
import { MealDetailsCard } from "../../components/mealDetailsCard/MealDetailsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import "./MealDetails.css"
import { Loader } from "../../components/Loader/Loader";
export const MealDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, mealsDetails } = useSelector((state) => state.mealDetails)

    useEffect(() => {
        dispatch(fetchMealDetails({ id }))
    }, [dispatch, id])
    const meal = mealsDetails[0] || {};

    const measures = [];

    for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`];

        if (measure && measure.trim() !== "") {
            measures.push({
                measure,
            });
        }
    }
    const instructions =
        meal?.strInstructions
            ?.split(/\r?\n/)
            .filter((item) => item.trim() !== "") || [];


    if (loading) {
        return <Loader />
    }
    return (
        <div className="meal-deatils">
            <h3 className="meal-detils-continer">MEAL DETAILS</h3>
            <div className="meal-deatils-card">
                <div>
                    <MealDetailsCard meal={meal} />
                </div>
                <div>
                    <h3>Measure</h3>
                    <div className="measure-card">
                        {measures.map((item,index) => (
                            <div className="measure-card-items" key={index}>
                                <FontAwesomeIcon
                                    icon={faSpoon}
                                    style={{ color: "rgb(255, 163, 0)" }}
                                />
                                <p className="measure-card-items-name">{item.measure}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Instructions</h3>
                    {instructions.map((item,index) => (
                        <div className="instructions-card-items" key={index}>
                            <FontAwesomeIcon
                                icon={faSquareCheck}
                                style={{ color: "rgb(255, 163, 0)" }}
                            />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}