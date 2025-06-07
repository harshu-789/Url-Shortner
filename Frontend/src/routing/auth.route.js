import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import AuthPage from "../pages/AuthPage"

export const authRoute = createRoute({
    getParentRoute : ()=> authRoute,
    path : "/auth",
    component : AuthPage,
})