// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments/:id
// 5. Create a route for PUT /comments/:id

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
    });