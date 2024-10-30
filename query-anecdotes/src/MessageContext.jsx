import React, { createContext, useReducer } from 'react'
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

// Luodaan konteksti
export const MessageContext = createContext()

// Tarjoaja, joka käärii komponentit ja antaa tilan käyttöön
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