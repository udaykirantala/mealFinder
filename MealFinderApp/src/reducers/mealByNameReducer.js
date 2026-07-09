import { FETCH_MEAL_BY_NAME_FAILURE, FETCH_MEAL_BY_NAME_REQUEST, FETCH_MEAL_BY_NAME_SUCCESS } from "../actions/mealByNameAction"

const initialState = {
    loading: false,
    meals: [],
    error: "",
}

export const mealByNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEAL_BY_NAME_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_MEAL_BY_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: action.payload
            }
        case FETCH_MEAL_BY_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}