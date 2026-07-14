import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { HomePage } from "../pages/home/HomePage"
import { CategoryPage } from "../pages/category/CategoryPage"
import { MealDetails } from "../pages/mealDetails/MealDetails"
import { SearchPage } from "../pages/Search/SearchPage"

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/cat/:category" element={<CategoryPage/>}/>
                <Route path="/meal/:id" element={<MealDetails/>}/>
                <Route path="/search/:search" element={<SearchPage/>}/>
            </Route>
        </Routes>
    )
}