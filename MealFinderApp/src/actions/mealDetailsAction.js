import { mealDetailsApi } from "../services/apis";

export const FETCH_MEAL_DETAILS_REQUEST = "FETCH_MEAL_DETAILS_REQUEST";
export const FETCH_MEAL_DETAILS_SUCCESS = "FETCH_MEAL_DETAILS_SUCCESS";
export const FETCH_MEAL_DETAILS_FAILURE = "FETCH_MEAL_DETAILS_FAILURE";


export const mealDetailsRequest = () => ({
  type: FETCH_MEAL_DETAILS_REQUEST,
});

export const mealDetailsSuccess = (data) => ({
  type: FETCH_MEAL_DETAILS_SUCCESS,
  payload: data,
});

export const mealDetailsFailure = (error) => ({
  type: FETCH_MEAL_DETAILS_FAILURE,
  payload: error,
});


export const fetchMealDetails = ({id})=>{
    return async (dispatch)=>{
        dispatch(mealDetailsRequest());
        try {
            const response = await mealDetailsApi({id});
            dispatch(mealDetailsSuccess(response.data.meals))
        } catch (error) {
            dispatch(mealDetailsFailure(error.message))
        }
    }
}