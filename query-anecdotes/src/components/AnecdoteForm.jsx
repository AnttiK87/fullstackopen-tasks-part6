import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote  } from '../services/requests'
import { useMessageDispatch } from '../MessageContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()

  const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
   })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    // Dispatchataan viesti kontekstiin
    dispatch({ type: 'SET_MESSAGE', payload: `Anecdote added: ${content}` })
    
    // Tyhjennä viesti 5 sekunnin kuluttua
    setTimeout(() => {
      dispatch({ type: 'CLEAR_MESSAGE' })
    }, 5000)
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
