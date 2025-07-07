import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)