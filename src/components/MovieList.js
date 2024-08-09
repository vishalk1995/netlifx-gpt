import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="p-4">
      <h1 className="text-xl md:text-3xl text-white pb-2">{title}</h1>
      <div className="flex overflow-x-scroll pt-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-red-700 scrollbar-track-transparent">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
