// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let comments = [
    { id: 1, text: 'Hello World!' },
    { id: 2, text: 'This is a comment.' }
];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});