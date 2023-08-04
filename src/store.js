import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './reducers/exercisesSlice';

const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export default store;
