import { Router } from "express";

// create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req,res) => {
    res.json("All recipes")
})

recipeRouter.post('/recipes', (req,res) => {
    res.json("Add recipe")
})

recipeRouter.patch('/recipes/:id', (req,res) => {
    res.json(`Recipe with id ${req.params.id} Updated`)
})

recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`Recipe with id ${req.params.id} Deleted`);
});

// export router
export default recipeRouter;