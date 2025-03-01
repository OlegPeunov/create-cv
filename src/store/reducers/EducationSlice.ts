import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EducationSliceState {
  institution: string;
  graduationDate: string;
  degree: string;
}
const initialState: EducationSliceState = {
  institution: '',
  graduationDate: '',
  degree: 'Бакалавр',
};

export const educationSlice = createSlice({
  name: 'education',
  initialState: initialState,
  reducers: {
    setInputInstitution(state, action: PayloadAction<string>) {
      state.institution = action.payload;
    },
    setGraduationDate(state, action: PayloadAction<string>) {
      state.graduationDate = action.payload;
    },
    setDegree(state, action: PayloadAction<string>) {
      state.degree = action.payload;
    },
  },
});

export default educationSlice.reducer;
