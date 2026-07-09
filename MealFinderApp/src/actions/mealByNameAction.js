import { mealByNameApi } from "../services/apis";

export const FETCH_MEAL_BY_NAME_REQUEST = "FETCH_MEAL_BY_NAME_REQUEST";
export const FETCH_MEAL_BY_NAME_SUCCESS = "FETCH_MEAL_BY_NAME_SUCCESS";
export const FETCH_MEAL_BY_NAME_FAILURE = "FETCH_MEAL_BY_NAME_FAILURE";


export const mealByNameRequest = () => ({
  type: FETCH_MEAL_BY_NAME_REQUEST,
});

export const mealByNameSuccess = (data) => ({
  type: FETCH_MEAL_BY_NAME_SUCCESS,
  payload: data,
});

export const mealByNameFailure = (error) => ({
  type: FETCH_MEAL_BY_NAME_FAILURE,
  payload: error,
});


export const fetchMealByName = ({foodName})=>{
    return async (dispatch)=>{
        dispatch(mealByNameRequest());
        try {
            const response = await mealByNameApi({foodName});
            dispatch(mealByNameSuccess(response.data.meals))
        } catch (error) {
            dispatch(mealByNameFailure(error.message))
        }
    }
}