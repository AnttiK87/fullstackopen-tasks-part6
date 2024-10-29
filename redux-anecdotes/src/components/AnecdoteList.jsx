import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import ShowNotification from './ShowNotification'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
      <li>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleClick(anecdote.id)}>vote</button>
          </div>
        </div>
      </li>
    )
  }

  Anecdote.propTypes = {
    anecdote: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    }).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    //console.log(state)
    if ( state.filter === 'ALL' ) {
      return state.anecdotes
    } 
    const filter = state.filter
    //console.log(filter)
    return state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
  })
  //console.log(anecdotes)

  return(
    <ul>
      {anecdotes.slice().sort((a, b) => b.votes - a.votes).map((anecdote) =>
        <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(vote(anecdote.id))
              const message = `You added vote for: ${anecdote.content}`
              ShowNotification(dispatch, message)
            }}
        />          
      )}
    </ul>
  )
}

export default Anecdotes