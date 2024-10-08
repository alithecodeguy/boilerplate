// libraries
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// reducers
import rootReducer from './rootReducer';

// queries
import { emptySplitApi } from './rtk/emptySplitApi';
import { rtkQueryErrorLogger } from './rtk/middlewares/rtkQueryErrorLogger';

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(emptySplitApi.middleware).concat(rtkQueryErrorLogger),
    devTools: process.env.NODE_ENV !== 'production'
  });
  setupListeners(store.dispatch);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
