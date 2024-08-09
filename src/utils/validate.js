export const checkValidData = (fullName, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidFullName = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(fullName);

  if (!isValidFullName) {
    return 'Full Name is not in valid format.';
  }

  if (!isEmailValid) {
    return 'Email Id is not in valid format.';
  }
  if (!isPasswordValid) {
    return 'Password is not in valid format.';
  }

  return null;
};

export const checkValidEmailForSignIn = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) {
    return 'Email Id is not in valid format.';
  }

  if (!password) {
    return 'Please enter the password.';
  }

  return null;
};
