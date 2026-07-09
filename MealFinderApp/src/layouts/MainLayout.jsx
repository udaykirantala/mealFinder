import { Banner } from "../components/banner/Banner"
import { HeaderNav } from "../components/HeaderNav/HeaderNav"
import { Outlet } from "react-router-dom"
export const MainLayout = () => {
    return (
        <>
            <HeaderNav />
            <Banner />
            <Outlet />
        </>
    )
}