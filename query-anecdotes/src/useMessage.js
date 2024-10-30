//Worked but had a warning if this was on the same file as message context provider

import { useContext } from 'react'
import { MessageContext } from './MessageContext'

export const useMessageValue = () => {
  const messageAndDispatch = useContext(MessageContext)
  return messageAndDispatch[0]
}
  
export const useMessageDispatch = () => {
  const messageAndDispatch = useContext(MessageContext)
  return messageAndDispatch[1]
}