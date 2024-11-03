import React, { useState } from 'react';

function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);

    return (
      <div onClick={() => setFlip(!flip)}> {/* Correctly call setFlip to update the state */}
        {flip ? flashcard.answer : flashcard.question}
      </div>
    );
}

export default Flashcard;
