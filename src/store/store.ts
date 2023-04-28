import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '@/pages/auth/auth-slice'
import { apiSlice } from '@/pages/dogs/dogs-api-slice';

export const store = configureStore({
  // Automatically invokes combineReducers
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

// Shown here: https://youtu.be/9zySeP5vH9c?t=2391
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


/**Modern React redux
- React Redux hooks
- Redux toolkit for the store setup and logic
- Recommended patterns like putting the logic in one place
- Using type script
- Export type hooks
**/





