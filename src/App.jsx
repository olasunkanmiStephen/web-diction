import { useState, useEffect } from "react";
import Content from "./Component/Content";
import Heading from "./Component/Heading";

function App() {
  const [word, setWord] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch word information
      const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
      const data = await response.json();
      setResults(data[0]);

      // Fetch synonyms
      const synonymsResponse = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const synonymsData = await synonymsResponse.json();
      setResults(prevResults => ({
        ...prevResults,
        synonyms: synonymsData.map(synonym => synonym.word)
      }));

      // Fetch antonyms
      const antonymsResponse = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
      const antonymsData = await antonymsResponse.json();
      setResults(prevResults => ({
        ...prevResults,
        antonyms: antonymsData.map(antonym => antonym.word)
      }));
    };

    fetchData();
  }, [word]);

  return (
    <div className='container mx-auto'>
      <nav className='my-2 h-14 flex flex-row items-center'>
        <h3 className="text-indigo-600 font-bold text-2xl">WordFinder</h3>
      </nav>
      <input
        type="text"
        className='w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow'
        value={word}
        onChange={e => setWord(e.target.value)}
      />
      <button
        className='mx-20 bg-gray-300 px-3 py-4 rounded-lg'
        onClick={() => setWord(word)}
      >
        Search
      </button>
      {results?.meanings?.length > 0 && (
        <>
          <Heading
            audioUrl={results.phonetics[0]?.audio}
            word={results.word}
            phonetic={results.phonetics[0]?.text}
          />
          <Content
            partOfSpeech={results.meanings[0]?.partOfSpeech}
            definitions={results.meanings[0]?.definitions}
            synonyms={results.synonyms || []}
            antonyms={results.antonyms || []}
          />
        </>
      )}
    </div>
  )
}

export default App;
