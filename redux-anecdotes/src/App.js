import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  const initializedAnecdotes = props.initializeAnecdotes
  useEffect(() => {
    initializedAnecdotes()
  }, [initializedAnecdotes])

  return (
    <div>
      <Notification />
      <AnecdoteList /> 
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)