import { useMessageValue } from '../useMessage'

const Notification = () => {
  const message = useMessageValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display: message === null ? 'none' : 'inline-block'
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification