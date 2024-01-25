import React from 'react';

function Content({ partOfSpeech, definitions }) {
  return (
    <div>
      <div className="flex">
        <p>{partOfSpeech}</p>
        <hr />
      </div>
      <p>Definitions</p>
      <ul className="list-disc">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
      <p>
        Synonyms <span>Hello</span>
      </p>
    </div>
  );
}

export default Content;
