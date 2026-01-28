import { configureStore } from '@reduxjs/toolkit';
import breadReducer from '../features/bread/breadSlice';

export const store = configureStore({
    reducer: {
        bread: breadReducer
    }
});