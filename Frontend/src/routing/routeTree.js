import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./pages/homepage.js"
import { authRoute } from "./auth.route"
import { dashboardRoute } from "./dashboard"
import RootLayout from "../RootLayout"


export const rootRoute = createRootRoute({
    component : RootLayout
})

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboardRoute

])