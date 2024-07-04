import { RecipeModel } from "../models/recipe.js";

// Get ALl Recipes
export const getRecipes = async (req, res, next) => {

    try {
        // Get query params
        const {
            limit = 10,
            skip = 0,
            filter = "{}",
        } = req.query;

        // Get all recipes from database
        const allRecipes = await RecipeModel
            .find(JSON.parse(filter))
            .limit(limit)
            .skip(skip);

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
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename

        });
        // Return response
        res.json(newRecipe);
        // you can return newRecipe too
    } catch (error) {
        next(error);
    }
};



export const patchRecipes = async (req, res, next) => {
    try {
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateRecipe);
    } catch (error) {
        next(error);
    }
};



// Delete Recipe
export const delRecipe = async (req, res, next) => {
    try {
        // Delete by id
        const delRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(`Recipe with id ${req.params.id} Deleted`);
    } catch (error) {
        next(error)
    }
};
