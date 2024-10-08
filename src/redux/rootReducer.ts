// libraries
import { combineReducers } from 'redux';

// slices
import sharedSliceReducer from './slices/sharedSlice';

// apis
import { emptySplitApi } from './rtk/emptySplitApi';

const rootReducer = combineReducers({
  shared: sharedSliceReducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer
});

export default rootReducer;
