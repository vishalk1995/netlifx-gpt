import { CDN_TMDB_POSTER } from '../utils/constants';

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-36 md:w-48 pl-2 pr-2">
      <img alt="movie poster" src={CDN_TMDB_POSTER + poster_path} />
    </div>
  );
};
export default MovieCard;
