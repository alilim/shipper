import { DriverActionTypes } from './driver.type'

export const setCurrentDriver = driver => {
  return({
    type: DriverActionTypes.SET_CURRENT_DRIVER,
    payload: driver
  })
}