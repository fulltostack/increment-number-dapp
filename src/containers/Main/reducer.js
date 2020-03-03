import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'contract',
  initialState: {
    error: null,
    loading: false,
    state: {
      incrementer: '',
      incrementedValue: '',
    },
  },
  reducers: {
    getContractState(state) {
      state.loading = true;
    },
    successInGettingContractState(state, action) {
      state.state = action.payload;
      state.loading = false;
    },
    errorInGettingContractState(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    incrementVar(state) {
      state.loading = true;
    },
    incrementVarSuccess(state) {
      state.loading = false;
    },
    incrementVarError(state) {
      state.loading = false;
    },
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { 
  getContractState, 
  successInGettingContractState, 
  errorInGettingContractState,
  incrementVar,
  incrementVarSuccess,
  incrementVarError,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
