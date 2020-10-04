import { DriverActionTypes } from './driver.type'

const INIT_STATE =  {
  currentDriver: null
}

const driverReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case DriverActionTypes.SET_CURRENT_DRIVER :
      return {
        ...state,
        currentDriver: action.payload
      }
    default: 
      return state
  }
}

export default driverReducer