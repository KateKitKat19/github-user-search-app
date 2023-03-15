import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  data: [],
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: { ...initialState },
  reducers: {
    updateQuery(state, action) {
      state.query = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { updateQuery, setError, setData } = searchSlice.actions;
