import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { HomePage } from "../pages/Home/HomePage"
import { CategoryPage } from "../pages/category/CategoryPage"

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="cat/:category" element={<CategoryPage/>}/>
            </Route>
        </Routes>
    )
}