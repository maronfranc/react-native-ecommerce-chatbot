import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'remote-redux-devtools';

import uiReducer from "./reducers/uiReducer";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
  ui: uiReducer,
  cart: cartReducer
});

let composeEnhancers = compose;
composeEnhancers = composeWithDevTools({ realtime: true });

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;