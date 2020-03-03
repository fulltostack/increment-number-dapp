import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'metamask',
  initialState: {
    isAvailable: false,
    accountsAvailable: false,
  },
  reducers: {
    updateMetaMask(state, action) {
      state.isAvailable = action.payload.isAvailable;
    },
    updateMetaMaskAccount(state, action) {
      state.accountsAvailable = action.payload.accountsAvailable;
    },
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { updateMetaMask, updateMetaMaskAccount } = actions;
// Export the reducer, either as a default or named export
export default reducer;
