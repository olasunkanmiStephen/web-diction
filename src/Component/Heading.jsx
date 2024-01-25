import React from 'react';

function Heading({ word, phonetic }) {
  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-row justify-between my-5">
      <h3>
        {word}
        <span className="block font-light">{phonetic}</span>
      </h3>
      <button onClick={playAudio} className="bg-indigo-300 h-20 w-20 rounded-full">
        Play
      </button>
    </div>
  );
}

export default Heading;
