import express from "express"
import { registerUser, loginUser, logoutUser, get_current_user } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { login_user, register_user } from "../services/auth.service.js"

const router = express.Router()

router.post("/register", register_user)
router.post("/login", login_user)
router.post("/logout",logoutUser)
router.get("/me",authMiddleware,get_current_user)

export default router;