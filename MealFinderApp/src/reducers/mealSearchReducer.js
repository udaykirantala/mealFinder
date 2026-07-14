import { FETCH_MEAL_SEARCH_FAILURE, FETCH_MEAL_SEARCH_REQUEST, FETCH_MEAL_SEARCH_SUCCESS } from "../actions/mealSearchAction"

const initialState = {
    loading: false,
    mealsSearch: [],
    error: "",
}

export const mealSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEAL_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_MEAL_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                mealsSearch: action.payload
            }
        case FETCH_MEAL_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}