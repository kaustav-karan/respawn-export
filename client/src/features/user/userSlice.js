/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {
    Id: import.meta.env.VITE_WEB_USER_ID,
    FirstName: '',
    LastName: '',
  },
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  backgroundImage: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeMainBackgroundImage: (state, action) => {
      if (action.type === 'remove') {
        state.backgroundImage = null;
      }
      if (action.type === 'set') {
        state.backgroundImage = action.payload.backgroundImage;
      }
    },
    setCredentials: (state, action) => {
      state.token = action.payload.AccessToken;
      state.user = action.payload.User;
    },
    logOut: (state) => {
      state.user = { Id: import.meta.env.VITE_WEB_USER_ID };
      state.token = null;
      localStorage.removeItem('user');
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        localStorage.setItem('mode', 'light');
      }
    },
  },
});

export const {
  setCredentials,
  logOut,
  setToken,
  changeMode,
  changeMainBackgroundImage,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;

export const selectMode = (state) => state.user.mode;

export const selectBackgroundImage = (state) => state.user.backgroundImage;

export default userSlice.reducer;
