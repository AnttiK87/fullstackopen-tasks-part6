//API reguests

//dependencies
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

//get all anecdotes
export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

//create new anecdote
export const createAnecdote = newAnecdote =>
    axios.post(baseUrl, newAnecdote).then(res => res.data)

//update anecdote
export const updateAnecdote = updatedAnecdote =>
    axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)