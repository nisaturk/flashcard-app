import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Where did we meet?',
    answer: 'Lublin',
    options: ['Madrid', 'Istanbul', 'Lublin', 'Paris']
  },
  {
    id: 2,
    question: 'What is the most important date?',
    answer: 'October 12',
    options: ['May 25', 'January 22', 'October 12', 'December 6']    
  }
];

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

export default App;