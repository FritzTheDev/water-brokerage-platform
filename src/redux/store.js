import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import { rootReducer } from "./reducers";
import { verifyAuth } from "./actions/auth";

export const configureStore = () => {
 const store = createStore(rootReducer, applyMiddleware(Thunk));
 store.dispatch(verifyAuth());
 return store;
}