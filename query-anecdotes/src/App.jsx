//Main structure of anecdote application

//dependencies
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './services/requests'
import { useMessageDispatch } from './useMessage'
import showMessage from './components/showMessage'

const App = () => {
  //setting up REact Query and UseReducer
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()

  //updating anecdote and rendering new vote count
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  //adding vote for anecdote
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    //show vote added message
    const message = `You voted for ${anecdote.content}`
    showMessage(dispatch, message)
  }

  //get anecdotes to the anecdote list
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: false
  })

  //show loading screen
  if (isPending) {
    return <div>loading data...</div>
  }

  //show error message if error occurs
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const anecdotes = data
  //render application
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

//exports
export default App