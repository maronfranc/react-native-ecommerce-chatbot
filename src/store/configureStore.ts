import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'remote-redux-devtools';

import uiReducer from "./reducers/uiReducer";
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  chat: chatReducer
});

let composeEnhancers = compose;
composeEnhancers = composeWithDevTools({ realtime: true });

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;