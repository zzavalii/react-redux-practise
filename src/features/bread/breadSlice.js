import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedBread: 'Rustic Sourdough' 
};

const breadSlice = createSlice({
    name: 'bread',
    initialState,
    reducers: {
        selectBread: (state, action) => {
        state.selectedBread = action.payload;
        }
    }
});

export const { selectBread } = breadSlice.actions;
export default breadSlice.reducer;