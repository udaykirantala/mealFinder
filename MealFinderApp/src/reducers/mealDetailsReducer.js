import { FETCH_MEAL_DETAILS_FAILURE, FETCH_MEAL_DETAILS_REQUEST, FETCH_MEAL_DETAILS_SUCCESS } from "../actions/mealDetailsAction"

const initialState = {
    loading: false,
    mealsDetails: [],
    error: "",
}

export const mealDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEAL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_MEAL_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                mealsDetails: action.payload
            }
        case FETCH_MEAL_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}