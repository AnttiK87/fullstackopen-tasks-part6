//for rendering anecdotes to anecdote list
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import { showMessage } from '../reducers/messageReducer'

//Single item of the list
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

  //setting prop types
  Anecdote.propTypes = {
    anecdote: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    }).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  //Getting anecdotes and setting filtering
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

  //rendering anecdote list and sorting according to votes 
  return(
    <ul>
      {anecdotes.slice().sort((a, b) => b.votes - a.votes).map((anecdote) =>
        <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(vote(anecdote))
              const message = `You added vote for: ${anecdote.content}`
              dispatch(showMessage(message, 10))
            }}
        />          
      )}
    </ul>
  )
}

export default Anecdotes