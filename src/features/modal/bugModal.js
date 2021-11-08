import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'bug modal',
  initialState: {
    value: false,
  },
  reducers: {
    openBug: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    closeBug: (state) => {
      state.value = false;
    },
    toggleBug: (state) => {
      state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openBug, closeBug, toggleBug } = counterSlice.actions;

export default counterSlice.reducer