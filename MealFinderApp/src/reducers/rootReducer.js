import {combineReducers} from "redux"
import { mealReducer } from "./mealReducer"
// import mealReducer  from "./reduxToolkit/mealSlice"
const rootReducer = combineReducers({
    meal:mealReducer
})

export default rootReducer