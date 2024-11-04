import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [spanishWord, setSpanishWord] = useState('');
  const [turkishWord, setTurkishWord] = useState('');

  // Fetch all flashcards from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/flashcards')
      .then(response => setFlashcards(response.data.flashcards))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  // Add a new flashcard
  const addFlashcard = () => {
    axios.post('http://localhost:5000/flashcards', { spanish: spanishWord, turkish: turkishWord })
      .then(response => {
        setFlashcards([...flashcards, { id: response.data.id, spanish: spanishWord, turkish: turkishWord }]);
        setSpanishWord('');
        setTurkishWord('');
      })
      .catch(error => console.error('Error adding flashcard:', error));
  };

  // Update a flashcard
  const updateFlashcard = (id, spanish, turkish) => {
    axios.put(`http://localhost:5000/flashcards/${id}`, { spanish, turkish })
      .then(() => {
        setFlashcards(flashcards.map(card => (card.id === id ? { ...card, spanish, turkish } : card)));
      })
      .catch(error => console.error('Error updating flashcard:', error));
  };

  // Delete a flashcard
  const deleteFlashcard = (id) => {
    axios.delete(`http://localhost:5000/flashcards/${id}`)
      .then(() => {
        setFlashcards(flashcards.filter(card => card.id !== id));
      })
      .catch(error => console.error('Error deleting flashcard:', error));
  };

  return (
    <div>
      <h1>Spanish-Turkish Flashcards</h1>
      <input
        type="text"
        value={spanishWord}
        onChange={(e) => setSpanishWord(e.target.value)}
        placeholder="Enter Spanish word"
      />
      <input
        type="text"
        value={turkishWord}
        onChange={(e) => setTurkishWord(e.target.value)}
        placeholder="Enter Turkish word"
      />
      <button onClick={addFlashcard}>Add Flashcard</button>

      <div className="flashcard-list">
        {flashcards.map((card) => (
          <div key={card.id} className="flashcard">
            <p>{card.spanish} - {card.turkish}</p>
            <button onClick={() => updateFlashcard(card.id, card.spanish, card.turkish)}>Edit</button>
            <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;