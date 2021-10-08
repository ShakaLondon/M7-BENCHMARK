import { createStore, applyMiddleware, compose } from 'redux'
import { reducers, persistedReducer } from '../reducers/index'
import thunk from "redux-thunk";
import initialState from "../initialstate"

import { persistStore, persistReducer } from 'redux-persist'

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins

const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)

export default configureStore