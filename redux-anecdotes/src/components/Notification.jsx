import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state => { return state.message })
  //console.log(message)

  const style = {
    border: 'solid',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    display: message === null ? 'none' : 'inline-block'
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification