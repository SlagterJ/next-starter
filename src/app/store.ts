import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Combine all reducers into a singular reducer to put
// into the store
const rootReducer = combineReducers({});

// Create a makeStore wrapper function to be used with
// next-redux-wrapper
const makeStore = () => {
  // Configure the store, add the rootReducer
  const store = configureStore({
    devTools: true,
    reducer: rootReducer,
  });

  return store;
};

// Get the AppStore type to generate the AppDispatch and
// RootState types
type AppStore = ReturnType<typeof makeStore>;
/** Dynamic Dispatch type based on the store */
export type AppDispatch = ReturnType<AppStore["dispatch"]>;
/** Dynamic RootState type based on the store */
export type RootState = ReturnType<AppStore["getState"]>;

// Create the wrapper to use around the _app component
const wrapper = createWrapper(makeStore);

export default wrapper;
