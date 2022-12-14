import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";

import thunk from "redux-thunk";
import { jobsReducer } from "./reducers/jobsReducer";
import { loaderReducer } from "./reducers/loaderReducer";

const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  loaderReducer : loaderReducer,
  usersReducer: usersReducer,
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;