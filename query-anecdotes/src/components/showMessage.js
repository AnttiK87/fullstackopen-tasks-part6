let timeoutId

const showMessage = (dispatch, message) => {
dispatch({ type: 'SET_MESSAGE', payload: message })
  const displayTime = 5000 

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    dispatch({ type: 'CLEAR_MESSAGE' })
    timeoutId = null 
  }, displayTime)
}

export default showMessage