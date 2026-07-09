import {combineReducers} from "redux"
import { mealReducer } from "./mealReducer"
import { mealByNameReducer } from "./mealByNameReducer"
// import mealReducer  from "./reduxToolkit/mealSlice"
const rootReducer = combineReducers({
    meal:mealReducer,
    mealbyName : mealByNameReducer
})

export default rootReducer