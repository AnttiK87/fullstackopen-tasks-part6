//API reguests

import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

//get all anecdotes
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

//create new anecdote
const createNew = async (content) => {
    const object = { "content": content, "votes": 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

  //update anecdote
const update = async (content) => {
    //console.log(content)
    const newObject = { ...content, "votes": content.votes +1 }
    const response = await axios.put(`${baseUrl}/${content.id}`, newObject)
    return response.data
  }

export default { getAll, createNew, update }