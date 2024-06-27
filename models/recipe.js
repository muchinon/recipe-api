import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    name: {type: String, unique: true, required: true},
    // the unique means you wont be able to use one name again
    ingredients: [{ type: String}]
});

// RecipeModel is a class
export const RecipeModel = model('Recipe', recipeSchema);