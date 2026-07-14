import {combineReducers} from "redux"
import { mealReducer } from "./mealReducer"
import { mealByNameReducer } from "./mealByNameReducer"
import { mealDetailsReducer } from "./mealDetailsReducer"
import { mealSearchReducer } from "./mealSearchReducer"
// import mealReducer  from "./reduxToolkit/mealSlice"
const rootReducer = combineReducers({
    meal:mealReducer,
    mealbyName : mealByNameReducer,
    mealDetails:mealDetailsReducer,
    mealSearch :mealSearchReducer
})

export default rootReducer