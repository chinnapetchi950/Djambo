import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithPassword } from '../../services/auth';

// Async thunk that keeps API call inside services/ per project rules
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginWithPassword(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Accept a couple common token shapes from API
        state.token = action.payload?.token || action.payload?.accessToken || null;
        state.user = action.payload?.user || null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || 'Login failed';
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
