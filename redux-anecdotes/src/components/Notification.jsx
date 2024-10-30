// Component for showing messages to the user
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state => { return state.message })
  //console.log(message)

  //style and display type is used to show and hide messages
  const style = {
    border: 'solid',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    display: message === null ? 'none' : 'inline-block'
  }
  
  //rendering the message
  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification