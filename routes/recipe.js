import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { delRecipe, getRecipe, getRecipes, patchRecipes, postRecipes } from "../controllers/recipe.js";

// create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipes)

recipeRouter.delete('/recipes/:id', delRecipe);

recipeRouter.get('/recipes/:id', getRecipe)

// export router
export default recipeRouter;