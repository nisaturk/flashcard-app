const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // For parsing JSON bodies
app.use(cors()); // To allow cross-origin requests

// Setting up the database
const db = new sqlite3.Database(':memory:');

// Creating a table for flashcards
db.serialize(() => {
  db.run('CREATE TABLE flashcards (id INTEGER PRIMARY KEY, spanish TEXT, turkish TEXT)');
});

// Getting all the flashcards
app.get('/flashcards', (req, res) => {
  db.all('SELECT * FROM flashcards', [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ flashcards: rows });
  });
});

// Adding a new flashcard
app.post('/flashcards', (req, res) => {
  const { spanish, turkish } = req.body;
  db.run('INSERT INTO flashcards (spanish, turkish) VALUES (?, ?)', [spanish, turkish], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

// Updating a flashcard
app.put('/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { spanish, turkish } = req.body;
  db.run('UPDATE flashcards SET spanish = ?, turkish = ? WHERE id = ?', [spanish, turkish, id], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Flashcard updated' });
  });
});

// Deleting a flashcard
app.delete('/flashcards/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM flashcards WHERE id = ?', id, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Flashcard deleted' });
  });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});