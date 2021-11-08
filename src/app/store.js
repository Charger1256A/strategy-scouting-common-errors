import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import bugModal from '../features/modal/bugModal';
import projectModal from '../features/modal/projectModal';

export default configureStore({
  reducer: {
    bugModal: bugModal,
    projectModal: projectModal,
  },
})