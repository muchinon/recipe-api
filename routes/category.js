import { Router } from "express";
import multer from "multer";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";

// Create upload middleware
const upload = multer({ dest: 'uploads/' })


// Create a router
const categoryRouter = Router()

// Define routes

categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);

// Export router
export default categoryRouter;