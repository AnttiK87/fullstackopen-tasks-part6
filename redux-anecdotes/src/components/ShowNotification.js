//used this at tasks 6.12 and 6.13

import { showMessage, hideMessage } from '../reducers/messageReducer'

let timeoutId

const ShowNotification = (dispatch, message) => {
  dispatch(showMessage(message))
  const displayTime = 5000 

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    dispatch(hideMessage())
    timeoutId = null 
  }, displayTime)
}

export default ShowNotification