// Anecdote form for adding anecdotes

// dependancies
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote  } from '../services/requests'
import { useMessageDispatch } from '../useMessage'
import showMessage from './showMessage'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()
  var message = null

  //adding new anecdote with react query
  const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      //show added anecdote message
      message = `Anecdote added: ${data.content}`
      showMessage(dispatch, message)
    },
    onError: (error) => {
      //console.log(error.status)
      if (error.status === 400){
        //show error message
        message = `Error: The anecdote was too short. Min. length 5 characters.`
        showMessage(dispatch, message)
      } else {
        //show error message
        message = `Error: ${error.message}`
        showMessage(dispatch, message)
      }
    }
   })

   //function for getting content of anecdote to be added 
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  //rendering the form
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

//exports
export default AnecdoteForm
