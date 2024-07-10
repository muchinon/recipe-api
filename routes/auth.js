import { Router } from "express";
import { register } from "../controllers/auth.js";

// Create Router
const authRouter = Router();

// Define the routes
authRouter.post('/register', register)

// Export route
export default authRouter;