const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      console.log('good on ', state)
      const updatedGood = {...state, good: state.good +1}
      state = updatedGood
      return state
    case 'OK':
      const updatedOk = {...state, ok: state.ok +1}
      state = updatedOk
      return state
    case 'BAD':
      const updatedBad = {...state, bad: state.bad +1}
      state = updatedBad
      return state
    case 'ZERO':
      const setToZero = {good: 0, ok: 0, bad: 0}
      state = setToZero
      return state
    default: return state
  }
  
}

export default counterReducer