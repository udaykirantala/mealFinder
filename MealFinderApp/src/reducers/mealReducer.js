import { GET_MEAL_CAT_FAILURE, GET_MEAL_CAT_REQUEST, GET_MEAL_CAT_SUCCESS } from "../actions/mealCategories";

const initialState = {
    loading : false,
    categories : [],
    error :"",
}

export const mealReducer = (state=initialState,action) =>{
    switch (action.type) {
        case GET_MEAL_CAT_REQUEST:
            return {
                ...state,
                loading:true,
                error:""
            }
        case GET_MEAL_CAT_SUCCESS:
            return {
                ...state,
                loading:false,
                categories:action.payload
            }
        case GET_MEAL_CAT_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}