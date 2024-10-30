//Function for showing and hiding the message with a delay

//for ensuring that message is shown for the set displaytime
let timeoutId

const showMessage = (dispatch, message) => {
dispatch({ type: 'SET_MESSAGE', payload: message })
  const displayTime = 5000 

  /*if previous message is still visible when new one is to be shown 
  timeoutId is cleares so that new displaytime can be set*/
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  //clearing message and time out id after delay set by displaytime
  timeoutId = setTimeout(() => {
    dispatch({ type: 'CLEAR_MESSAGE' })
    timeoutId = null 
  }, displayTime)
}

export default showMessage