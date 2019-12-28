import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = ( props ) => {

    const vote = (anecdote) => {
        props.voteAnecdote(anecdote)
        props.setNotification(`you voted for '${anecdote.content}'`, 5)
      }
    
    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes.sort((a,b) => {return b.votes - a.votes}).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
    }
  }

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Anecdotes)