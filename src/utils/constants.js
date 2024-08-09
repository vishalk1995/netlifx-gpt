export const MAIN_LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const MAIN_BG_IMG =
  'https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/9a0b3e37-2f17-459f-b90b-15e96c2085ee/US-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg';

export const DEFAULT_USER_AVATAR_URL =
  'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg';

export const API_TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const CDN_TMDB_POSTER = 'https://image.tmdb.org/t/p/w500/';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];
