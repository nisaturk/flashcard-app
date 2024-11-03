import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {  // Destructure props correctly
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => (
        <Flashcard flashcard={flashcard} key={flashcard.id} />  // Correctly close the Flashcard component
      ))}
    </div>
  );
}
