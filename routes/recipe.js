import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import {
  delRecipe,
  getRecipes,
  patchRecipes,
  postRecipes,
} from "../controllers/recipe.js";
import multer from "multer";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

const upload = multer({ dest: "uploads/" });

// create a router
const recipeRouter = Router();

// Apply express session middleware
// recipeRouter.use(checkUserSession);

// Define routes

recipeRouter.get("/recipes", getRecipes);

//  Apply express session middleware to post, patch and delete
recipeRouter.post(
  "/recipes",
  checkUserSession,
  remoteUpload.single("image"),
  postRecipes
);

recipeRouter.patch("/recipes/:id", checkUserSession, patchRecipes);

recipeRouter.delete("/recipes/:id", checkUserSession, delRecipe);

// export router
export default recipeRouter;
