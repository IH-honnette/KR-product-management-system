require('dotenv').config() // Load environment variables
const express = require("express");
const app = express();

const port = process.env.PORT; 

app.get('/', (req, res) => {
    res.send("Welcome to product management system!")
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});