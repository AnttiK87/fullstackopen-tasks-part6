// Component for showing messages to the user

//dependencies
import { useMessageValue } from '../useMessage'

const Notification = () => {
  //message is passed with reacts useReducer and Context API 
  const message = useMessageValue()

  //style and display type is used to show and hide messages
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display: message === null ? 'none' : 'inline-block'
  }

  //rendering the message
  return (
    <div style={style}>
      {message}
    </div>
  )
}

//exports
export default Notification