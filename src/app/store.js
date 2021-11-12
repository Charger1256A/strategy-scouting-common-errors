import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import bugModal from '../features/modal/bugModal';
import bugDataModal from '../features/modal/bugDataModal';
import projectModal from '../features/modal/projectModal';

export default configureStore({
  reducer: {
    bugModal: bugModal,
    bugDataModal: bugDataModal,
    projectModal: projectModal,
  },
})