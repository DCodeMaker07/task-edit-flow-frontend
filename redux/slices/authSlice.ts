import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '@/types/auth';

interface AuthState {
  user: Omit<LoginResponse, 'access_token'> | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      const { access_token, ...user } = action.payload;

      state.user = user;
      state.token = access_token;

      localStorage.setItem('token', access_token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;