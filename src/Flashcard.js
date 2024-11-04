import React, { useState } from 'react';
import './stylesheets/Flashcard.css';

function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);

    return (
        <div 
            className={`hola card ${flip ? 'flip' : ''}`} 
            onClick={() => setFlip(!flip)}
        >
            <div className='card-front'>
                <div className='flashcard-question'>
                    {flashcard.question}
                </div>
                <div className='flashcard-options'>
                    {flashcard.options.map(option => (
                        <div className='flashcard-option' key={option}>
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className='card-back'>
                {flashcard.answer}
            </div>
        </div>
    );
}

export default Flashcard;