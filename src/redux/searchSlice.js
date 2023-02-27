import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  data: [],
};
export const searchSlice = createSlice({
  name: 'search',
  initialState: { ...initialState },
  reducers: {
    updateQuery(state, action) {
      console.log(action.payload, 'action.payload in reducer');
      state.query = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { updateQuery } = searchSlice.actions;
