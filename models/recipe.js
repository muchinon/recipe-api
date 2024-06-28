import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose"

const recipeSchema = new Schema({
    // the unique means you wont be able to use one name again
    name: { type: String, unique: true, required: true },
    categoryId: { type: Types.ObjectId,ref:'Category', required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    image: {type:String, required:true},
    favourite: {type: Boolean, default:false}
}, {
    timestamps: true
});

recipeSchema.plugin(normalize)

// RecipeModel is a class
export const RecipeModel = model('Recipe', recipeSchema);