import { mealCatApi } from "../services/apis";

export const GET_MEAL_CAT_REQUEST = "GET_MEAL_CAT_REQUEST";
export const GET_MEAL_CAT_SUCCESS = "GET_MEAL_CAT_SUCCESS";
export const GET_MEAL_CAT_FAILURE = "GET_MEAL_CAT_FAILURE";

// Request Action
export const mealCatRequest = () => ({
  type: GET_MEAL_CAT_REQUEST,
});

// Success Action
export const mealCatSuccess = (data) => ({
  type: GET_MEAL_CAT_SUCCESS,
  payload: data,
});

// Failure Action
export const mealCatFailure = (error) => ({
  type: GET_MEAL_CAT_FAILURE,
  payload: error,
});



export const fetchMealCat = ()=>{
    return async (dispatch)=>{
        dispatch(mealCatRequest());
        try {
            const response = await mealCatApi();
            dispatch(mealCatSuccess(response.data.categories))
        } catch (error) {
            dispatch(mealCatFailure(error.message))
        }
    }
}