//form for adding anecdotes
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/messageReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  //functionality for getting value and adding new
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    const message = `New anecdote added: ${content}`
    dispatch(showMessage(message , 10))
  }

  //rendering form
  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewAnecdote