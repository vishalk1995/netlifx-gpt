import { useSelector } from 'react-redux';
import useMainBackgroundTrailer from '../hooks/useMainBackgroundTrailer';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((state) => state.movie.trailer);
  useMainBackgroundTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          trailer?.key +
          '?&autoplay=1&mute=1'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
