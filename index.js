import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create express app
const app = express();

// Define routes
app.get('/', (req,res) => {
    res.json('Dabubabu');
});

app.post('/login', (req,res) => {
    res.json('Login successful');
})

app.delete('/products/:id', (req,res) => {
    res.json('product deleted')
})

// Use routes
app.use(recipeRouter)

// Listen for incoming requests
app.listen(3000, () => {
    console.log("App listening on port 3000");
});