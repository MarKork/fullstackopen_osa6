import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const newAnecdote = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.addAd.value
        event.target.addAd.value = ''
        props.createAnecdote(content)
        props.setNotification(`you added '${content}'`, 5)
    }

    return ( 
      <form onSubmit={addAnecdote}>
        <h2>create new</h2>
        <input name="addAd"/>
        <button type="submit">create</button>
      </form>
    )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

export default connect(
  null, 
  mapDispatchToProps
  )(newAnecdote)