import React, { createContext, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'

// Määritellään reducer
const messageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.payload
    case 'CLEAR_MESSAGE':
      return null
    default:
      return state
  }
}

// Luodaan kontekstit
const MessageStateContext = createContext()
const MessageDispatchContext = createContext()

// Tarjoaja, joka käärii komponentit ja antaa tilan käyttöön
export const MessageProvider = ({ children }) => {
  const [message, dispatch] = useReducer(messageReducer, null)

  return (
    <MessageStateContext.Provider value={message}>
      <MessageDispatchContext.Provider value={dispatch}>
        {children}
      </MessageDispatchContext.Provider>
    </MessageStateContext.Provider>
  )
}

// Määritetään PropTypes
MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Kustomoidut hookit tilan ja dispatchin käyttöön
export const useMessageValue = () => useContext(MessageStateContext)
export const useMessageDispatch = () => useContext(MessageDispatchContext)
