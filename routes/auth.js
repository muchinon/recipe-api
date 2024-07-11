import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create Router
const authRouter = Router();

// Define the routes
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", checkUserSession, logout);
authRouter.get("/profile", checkUserSession, profile);

// Export route
export default authRouter;
