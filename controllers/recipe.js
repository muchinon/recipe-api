import { RecipeModel } from "../models/recipe.js";

// Get ALl Recipes
export const getRecipes = async (req,res, next) => {

    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find()
    
        // Return all recipes as the response
        res.json(allRecipes)
    } catch (error) {
        next(error)
    }
};

// Post Recipe
export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json('Recipe Added');
        // you can return newRecipe too
    } catch (error) {
        next(error);
    }
};

export const patchRecipes = (req, res) => {
    res.json(`Recipe with id ${req.params.id} Updated`)
};

// Delete Recipe
export const delRecipe = async (req, res,next) => {
   try {
    // Delete by id
    const delRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    // Return response
     res.json(`Recipe with id ${req.params.id} Deleted`);
   } catch (error) {
    next(error)
   }
}

export const getRecipe = (req, res) => {
    res.json(`Get recipe with id ${req.params.id}`)
}