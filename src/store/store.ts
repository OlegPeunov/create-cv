import { combineReducers, configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
const rootReducer = combineReducers({
  personalInfoReducer,
  educationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
