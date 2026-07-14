import { mealSearchApi } from "../services/apis";

export const FETCH_MEAL_SEARCH_REQUEST = "FETCH_MEAL_SEARCH_REQUEST";
export const FETCH_MEAL_SEARCH_SUCCESS = "FETCH_MEAL_SEARCH_SUCCESS";
export const FETCH_MEAL_SEARCH_FAILURE = "FETCH_MEAL_SEARCH_FAILURE";


export const mealSearchRequest = () => ({
  type: FETCH_MEAL_SEARCH_REQUEST,
});

export const mealSearchSuccess = (data) => ({
  type: FETCH_MEAL_SEARCH_SUCCESS,
  payload: data,
});

export const mealSearchFailure = (error) => ({
  type: FETCH_MEAL_SEARCH_FAILURE,
  payload: error,
});


export const fetchMealSearch = ({searchText})=>{
    return async (dispatch)=>{
        dispatch(mealSearchRequest());
        try {
            const response = await mealSearchApi({searchText});
            dispatch(mealSearchSuccess(response.data.meals))
        } catch (error) {
            dispatch(mealSearchFailure(error.message))
        }
    }
}