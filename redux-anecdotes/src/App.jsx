import AnecdoteList  from "./components/AnecdoteList"
import AnecdoteForm  from "./components/NewAnecdote"
import AnecdoteFilter  from "./components/AnecdoteFilter"
import Notification  from "./components/Notification"

const App = () => {
  return(
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <h3>Create new anecdote</h3>
      <AnecdoteForm />
    </div>
  )
}

export default App