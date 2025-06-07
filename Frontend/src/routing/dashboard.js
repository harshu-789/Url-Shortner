import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashboardPage from "../pages/DashboardPage"
import { checkAuth } from "../utils/helper"


export const dashboardRoute = createroute({
    getParentRoute : ()=> rootRoute,
    path : "/dashboard",
    component : DashboardPage,
    beforeLoad : checkAuth
})