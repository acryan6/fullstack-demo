const express = require('express');
const Bug = require('./db/queries');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log('Server is listening on port 3000'));

app.get('/bugs', (req, res) => {
  console.log('get called');
});

app.post('/bugs', (req, res) => {
  console.log('post called');
});

module.exports = app;
