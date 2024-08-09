import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { MAIN_LOGO } from '../utils/constants';
import { toggleGptUI } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeDisplayLanguage } from '../utils/appConfigSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptShowValue = useSelector((store) => store.gpt.showGptUi);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened. Page to be build
        navigate('/error');
      });
  };

  const handleGptClick = () => {
    // toggle gpt search UI, we can use state vars but here we are using redux store
    dispatch(toggleGptUI());
  };

  const handleDisplayLangChange = (e) => {
    dispatch(changeDisplayLanguage(e.target.value));
  };

  useEffect(() => {
    // It is kind of an event listener so we set it up once ([] empty dependency array)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Adding the User to the Redux Store
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
        // send the user to the browse page
      } else {
        // User is signed out, remove it from the Redux Store
        dispatch(removeUser());
        navigate('/');
      }
    });

    // for cleanup i.e. unsubscribe to the above event listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between ">
      <img className="w-52 mx-auto md:mx-0" src={MAIN_LOGO} alt="Header logo" />
      {user && (
        <div className="flex p-2 mx-auto md:mx-0">
          {gptShowValue && (
            <select
              className="p-2 m-2 bg-gray-600 text-white font-bold h-10"
              onChange={handleDisplayLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="bg-purple-700 m-2 p-2 h-10 font-bold text-white"
            onClick={handleGptClick}
          >
            {gptShowValue ? 'Home Page' : 'GPT search'}
          </button>
          <img
            src={user.photoURL}
            alt="user avatar"
            className="hidden md:inline-block h-10 w-10 m-2"
          />
          <button
            className="bg-red-700 m-2 p-2 h-10 font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
