import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: [],
    bodyPart: 'all',
  },
  reducers: {
    setExercises: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.exercises = action.payload;
    },
    setBodyPart: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.bodyPart = action.payload;
    },
  },
});

export const { setExercises, setBodyPart } = exercisesSlice.actions;

export default exercisesSlice.reducer;
