import React from 'react';
import './app.css';
import FlashcardApp from './FlashcardApp'; 

/*const SAMPLE_FLASHCARDS = [ // I had initialized this to test the flip function
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
];*/

function App() {
  return (
    <div className="App">
      <FlashcardApp />  {/*Rendering the FlashcardApp component */}
    </div>
  );
}

export default App;