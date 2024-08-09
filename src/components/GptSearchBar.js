import { useDispatch, useSelector } from 'react-redux';
import languageConstants from '../utils/languageConstants';
import { useRef } from 'react';
import openAi from '../utils/openAi';
import { API_TMDB_OPTIONS } from '../utils/constants';
import { addGptSuggestion } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (store) => store.appConfig.displayLanguage
  );

  const searchTextRef = useRef(null);

  const fetchMovieTMDB = async (movieName) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movieName +
        '&include_adult=false&language=en-US&page=1',
      API_TMDB_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptSearchQuery =
      'Act as a movie and TV series recommendation system and suggest some movies for the query:' +
      searchTextRef.current.value +
      '. only give me a list of 5 to 10 suggestions. give suggestion in a comma separated format like:  Don, Sholay, Bahubali, etc. Do not include anything else in your respose except the list of movies.';

    // OPENAI API CALL
    const gptSuggestions = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: gptSearchQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptSuggestions.choices) {
      // ERROR  HANDLING
    }

    const gptSuggestionsName =
      gptSuggestions.choices?.[0]?.message?.content.split(', ');

    // Search each suggestion search TMBD API for the movie detailsgptgot
    const promise_array_tmdb_search = gptSuggestionsName.map((movie) =>
      fetchMovieTMDB(movie)
    );

    const tmdbResults = await Promise.all(promise_array_tmdb_search);
    dispatch(
      addGptSuggestion({
        movieNames: gptSuggestionsName,
        tmbdDetails: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[15%] flex justify-center">
      <form
        className="w-9/12 md:w-1/2  bg-purple-200 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          type="text"
          placeholder={languageConstants[selectedLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 px-2 bg-red-700 text-white font-bold col-span-3 m-4 rounded-md"
          onClick={handleGptSearch}
        >
          {languageConstants[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
