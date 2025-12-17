console.log("Hello Node.js!");

// //FUNCTION

function Hello(x, y) {
    return (x + y)
}
console.log(Hello(3, 9))

// // FILE SYSTEM

const fs = require("fs");

// write file
fs.writeFileSync("data.txt", "Hello World from Node");

// read file
const result = fs.readFileSync("data.txt", 'utf-8');
console.log(result);



// // Node.js + Express me API banana

const express = require("express");

const app = express();

// JSON API

app.get("/api/login", (req, res) => {
    res.json({
        name: "Deepanshu",
        age: 25,
    });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});






















