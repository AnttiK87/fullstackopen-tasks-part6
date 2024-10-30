import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote  } from '../services/requests'
import { useMessageDispatch } from '../useMessage'
import showMessage from './showMessage'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()
  var message = null

  const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      //show message
      message = `Anecdote added: ${data.content}`
      showMessage(dispatch, message)
    },
    onError: (error) => {
      //console.log(error.status)
      if (error.status === 400){
        //show message
        message = `Error: The anecdote was too short. Min. length 5 characters.`
        showMessage(dispatch, message)
      } else {
        //show message
        message = `Error: ${error.message}`
        showMessage(dispatch, message)
      }
    }
   })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit" >create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
