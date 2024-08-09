import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { gptSuggestionsName, gptSuggestions } = useSelector(
    (store) => store.gpt
  );

  if (!gptSuggestionsName) {
    return null;
  }

  return (
    <div className="p-4 m-4 bg-black bg-opacity-75 text-white">
      <div>
        {gptSuggestionsName.map((movie, index) => {
          return (
            <MovieList
              key={movie}
              title={movie}
              movies={gptSuggestions[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
