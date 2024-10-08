// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { sharedSliceInitialState } from './sharedSliceInitialState';

const sharedSlice = createSlice({
  name: 'shared',
  initialState: sharedSliceInitialState,
  reducers: {
    setSampleState(state, action: PayloadAction<string>) {
      state.sampleState = action.payload;
    }
  }
});

// actions
export const { setSampleState } = sharedSlice.actions;

// selector
export const selectSampleState = (state: RootState) => state.shared.sampleState;

// reducer
export default sharedSlice.reducer;
