import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData, checkValidEmailForSignIn } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { DEFAULT_USER_AVATAR_URL, MAIN_BG_IMG } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form Data: Very important Step

    // Sign up logic
    if (!isSignInForm) {
      const validationMessage = checkValidData(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      if (validationMessage) {
        setErrorMessage(validationMessage);
        return;
      }

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // Update the profile for name
          updateProfile(userCredential.user, {
            displayName: fullName.current.value,
            photoURL: DEFAULT_USER_AVATAR_URL,
          })
            .then(() => {
              // Profile updated!
              // update store once again

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }

    // Sign In logic
    else {
      const validationEmail = checkValidEmailForSignIn(
        email.current.value,
        password.current.value
      );
      if (validationEmail) {
        setErrorMessage(validationEmail);
        return;
      }
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:w-screen"
          src={MAIN_BG_IMG}
          alt="background"
        />
      </div>
      {/* SignIn and SignUp form */}
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute px-8 py-4 md:p-12 bg-black bg-opacity-85 w-9/12 md:w-1/4  my-36 mx-auto right-0 left-0 rounded-md  text-white"
        >
          <h1 className="font-bold text-2xl md:text-4xl text-white py-3 w-full">
            {' '}
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="my-6 p-4 w-full bg-gray-600"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="my-6 p-4 w-full bg-gray-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-6 p-4 w-full bg-gray-600"
          />
          <p className="text-red-500 font-bold">{errorMessage}</p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className=" py-2 my-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? 'New to Netflix? Sign up now.'
              : 'Already a member? Sign in now.'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
