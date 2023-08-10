// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');
// Create express app
const app = express();
// Use body parser
app.use(bodyParser.json());
// Use cors
app.use(cors());
// Create comments object
const commentsByPostId = {};
// Create endpoint to get comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});
// Create endpoint to post comments
app.listen(4001, () => {
    console.log('Listening on 4001');
});
