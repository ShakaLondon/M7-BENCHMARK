import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'


export const reducers = combineReducers({
    favourites: favouritesReducer,
    search: searchReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_ENCRYPT_KEY,
      }),
    ],
  }

export const persistedReducer = persistReducer(persistConfig, reducers)
