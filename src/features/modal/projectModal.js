import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'project modal',
  initialState: {
    value: false,
  },
  reducers: {
    openProject: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    closeProject: (state) => {
      state.value = false;
    },
    toggleProject: (state) => {
      state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openProject, closeProject, toggleProject } = counterSlice.actions

export default counterSlice.reducer