// create db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugs', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.log('error'));
db.once('open', () => { console.log('database is on') });
const bugSchema = new mongoose.Schema({
  bugName: String,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String,
});

const Bug = mongoose.model('Bug', bugSchema);


module.exports = Bug;
