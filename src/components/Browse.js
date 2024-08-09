import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowseMainContainer from './BrowseMainContainer';
import BrowseSecondaryContainer from './BrowseSecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptUiBoolean = useSelector((store) => store.gpt.showGptUi);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptUiBoolean ? (
        <GptSearch />
      ) : (
        <>
          <BrowseMainContainer />
          <BrowseSecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
