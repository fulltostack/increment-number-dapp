import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'metamask',
  initialState: {
    isAvailable: false,
    account: {},
  },
  reducers: {
    metamaskAvailable(state, action) {
      state.isAvailable = action.payload.isAvailable;
    },
    accountLoggedIn(state, action) {
      state.account = action.payload.isAvailable;
    },
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { 
  metamaskAvailable, 
  accountLoggedIn, 
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
