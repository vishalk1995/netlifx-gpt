import { useEffect } from 'react';
import { API_TMDB_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMainBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailer);
  const getMovieVideo = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?language=en-US',
      API_TMDB_OPTIONS
    );
    const json = await data.json();
    const trailerVideo = json.results.filter(
      (video) => video.type === 'Trailer'
    )?.[0];

    // basically if no trailer is found then just take the first video
    const trailer = trailerVideo || json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    !trailer && getMovieVideo();
  }, []);
};
export default useMainBackgroundTrailer;
