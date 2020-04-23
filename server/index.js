const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Bug = require('./db/queries');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log('Server is listening on port 3000'));

app.get('/bugs', (req, res) => {
  Bug.find()
    .then(bugs => res.send(bugs))
    .catch(err => console.log(err));
});

app.post('/bugs', (req, res) => {

  let newBug = new Bug(req.body);
  newBug.save((err) => {
    if (err) {
      return handleError(err);
    }
  })
  res.send(JSON.stringify(newBug));
});

module.exports = app;
