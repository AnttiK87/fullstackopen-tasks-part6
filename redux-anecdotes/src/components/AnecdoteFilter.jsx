import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const filterAnecdote = (event) => {

    event.preventDefault()
    const filter = event.target.value === '' ? 'ALL' : event.target.value
    //console.log(filter)
    dispatch(filterChange(filter))
  }

  return (
    <form>
      <div>Filter: <input name="filter"  onChange={filterAnecdote} /></div>
    </form>
  )
}

export default AnecdoteFilter