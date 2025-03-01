import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PersonalInfoState {
  name: string;
  location: string;
  phone: string;
  birthday: string;
  avatar: string;
}
const initialState: PersonalInfoState = {
  name: '',
  location: '',
  phone: '',
  birthday: '',
  avatar: '',
};

export const personalInfoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    setInputName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setInputLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setInputPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setBirthday(state, action: PayloadAction<string>) {
      state.birthday = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
  },
});

export default personalInfoSlice.reducer;
