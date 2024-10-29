import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'message',
    initialState: null,
    reducers: {
        showMessage(state, action) {
        const message = action.payload
        //console.log(message)
        return message
      },
      hideMessage() {
        const message = null
        //console.log(message)
        return message
      }
    },
})
  
export const { showMessage, hideMessage } = messageSlice.actions
export default messageSlice.reducer