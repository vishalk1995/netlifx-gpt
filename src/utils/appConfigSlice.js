import { createSlice } from '@reduxjs/toolkit';
import { SUPPORTED_LANGUAGES } from './constants';

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState: {
    displayLanguage: SUPPORTED_LANGUAGES[0].identifier,
  },
  reducers: {
    changeDisplayLanguage: (state, action) => {
      state.displayLanguage = action.payload;
    },
  },
});

export default appConfigSlice.reducer;
export const { changeDisplayLanguage } = appConfigSlice.actions;
