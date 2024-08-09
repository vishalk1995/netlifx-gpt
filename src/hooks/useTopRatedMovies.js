import { addTopRatedMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_TMDB_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
