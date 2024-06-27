import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req,res) => {
    res.json("All recipes")
})

recipeRouter.post('/recipes', async (req,res) => {
    // Add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json('Recipe Added');
})

recipeRouter.patch('/recipes/:id', (req,res) => {
    res.json(`Recipe with id ${req.params.id} Updated`)
})

recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`Recipe with id ${req.params.id} Deleted`);
});

recipeRouter.get('/recipes/:id', (req,res) => {
    res.json(`Get recipe with id ${req.params.id}`)
} )

// export router
export default recipeRouter;