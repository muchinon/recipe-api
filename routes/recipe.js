import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { delRecipe, getRecipes, patchRecipes, postRecipes } from "../controllers/recipe.js";
import multer from "multer";
import { localUpload, remoteUpload } from "../middlewares/upload.js";

const upload = multer({ dest: 'uploads/' })

// create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', remoteUpload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipes)

recipeRouter.delete('/recipes/:id', delRecipe);


// export router
export default recipeRouter;