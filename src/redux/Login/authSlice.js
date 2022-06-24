import { createSlice } from '@reduxjs/toolkit'

const { user, authToken } = JSON.parse(localStorage.getItem("auth")) || {};

const initialState = {
  user,
  authToken,
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user,
      state.authToken = action.payload.authToken
      localStorage.setItem("auth", JSON.stringify({ user: action.payload.user, authToken: action.payload.authToken }))
    },
    loginFail: (state) => {
      state.error = "Fail"
    },
    logout: (state) => {
      state.user = null;
      state.authToken = null
      localStorage.removeItem("auth")
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, loginFail, logout } = authSlice.actions

export default authSlice.reducer