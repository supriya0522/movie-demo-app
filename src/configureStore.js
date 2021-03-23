import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movies from "./store/reducers/movies";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
    movies
});
const persistedReducer = persistReducer(persistConfig, reducers)
const initialState = {};
const enhancers = [];
const middleware = [thunk];

const { devToolsExtension } = window;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}
//}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(persistedReducer, initialState, composedEnhancers);

export default store;