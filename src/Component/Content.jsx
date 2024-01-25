import React from 'react';

function Content({ partOfSpeech, definitions, synonyms, antonyms }) {
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
      {synonyms.length > 0 && (
        <p>
          Synonyms
          <ul>
            {synonyms.map((synonym, index) => (
              <li key={index}>{synonym}</li>
            ))}
          </ul>
        </p>
      )}
      {antonyms.length > 0 && (
        <p>
          Antonyms
          <ul>
            {antonyms.map((antonym, index) => (
              <li key={index}>{antonym}</li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
}

export default Content;
