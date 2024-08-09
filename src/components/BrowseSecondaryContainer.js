import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const BrowseSecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="relative z-20 mt-0 md:-mt-96 pl-4 md:pl-6">
        {movies.nowPlayingMovies && (
          <MovieList title={'In Theatre'} movies={movies.nowPlayingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={'Popular'} movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
        )}

        {movies.upcomingMovies && (
          <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
        )}
      </div>
    </div>
  );
};
export default BrowseSecondaryContainer;
