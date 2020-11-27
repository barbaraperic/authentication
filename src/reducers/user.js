import { ADD_USER } from '../actions/types'

const initialState = {
  user: {}
}

console.log('STATE', initialState)

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case ADD_USER:
      return { user: payload }
    default: return state
  }
}

export default reducer



