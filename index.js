import express from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

// Connect to database
await mongoose.connect(process.env.MONGO_URL)

// Create express app
const app = express();

// Apply middlewares
app.use(express.json());

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

// sSCgOV4rXthhqsmE