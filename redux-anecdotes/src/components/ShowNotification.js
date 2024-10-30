//Function for showing and hiding the message with a delay
//used this at tasks 6.12 and 6.13

import { showMessage, hideMessage } from '../reducers/messageReducer'

//for ensuring that message is shown for the set displaytime
let timeoutId

const ShowNotification = (dispatch, message) => {
  dispatch(showMessage(message))
  const displayTime = 5000 

  /*if previous message is still visible when new one is to be shown 
  timeoutId is cleares so that new displaytime can be set*/
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

    //clearing message and time out id after delay set by displaytime
  timeoutId = setTimeout(() => {
    dispatch(hideMessage())
    timeoutId = null 
  }, displayTime)
}

export default ShowNotification