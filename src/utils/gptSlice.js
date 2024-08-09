import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptUi: false,
    gptSuggestionsName: null,
    gptSuggestions: null,
  },
  reducers: {
    toggleGptUI: (state) => {
      state.showGptUi = !state.showGptUi;
    },
    addGptSuggestion: (state, action) => {
      const { movieNames, tmbdDetails } = action.payload;
      state.gptSuggestionsName = movieNames;
      state.gptSuggestions = tmbdDetails;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptUI, addGptSuggestion } = gptSlice.actions;
