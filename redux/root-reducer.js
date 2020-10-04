import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import driverReducer from './driver/driver.reducer'

const persistConfig = {
  key: 'root',
  storage
}

const appReducer = combineReducers({
  driver: driverReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    storage.removeItem('persist:root')
    state = undefined
  }
  
  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)