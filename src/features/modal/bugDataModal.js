import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'bug data modal',
  initialState: {
    value: false,
    data: {}
  },
  reducers: {
    openBugData: (state, data) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.data = data.payload;
    },
    closeBugData: (state) => {
      state.value = false;
    },
    toggleBugData: (state) => {
      state.value = !state.value;
    },

    getData: (state) => {
        return state.data;
    }
  },
})

// Action creators are generated for each case reducer function
export const { openBugData, closeBugData, toggleBugData, getData } = counterSlice.actions;

export default counterSlice.reducer