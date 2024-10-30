//settin useREducer and Context api
import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

// defining reducer for messages
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

// creating context
export const MessageContext = createContext()

// Provider for defining component and state
export const MessageContextProvider = ({ children }) => {
  const [message, messageDispatch] = useReducer(messageReducer, null)

  return (
    <MessageContext.Provider value={[message, messageDispatch]}>
        {children}
    </MessageContext.Provider>  
  )
}

MessageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}