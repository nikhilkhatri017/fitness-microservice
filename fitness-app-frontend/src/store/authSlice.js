import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState :{
    user: JSON.parse(localStorage.getItem('user')) || null,
    token:localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null
  },
  reducers: {
    setCredentials: (state, action) => {
      // Update the state with the new user information
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.user.sub;

      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('userId', action.payload.user.sub);
    },
    logout: (state) => {
      // Clear the user information from the state
      state.user = null;
      state.token = null;
      state.userId = null;
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userId');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;