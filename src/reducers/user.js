import { ADD_USER } from '../actions/types'

const initialState = {}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_USER:
      return { user: payload }
    default: return state
  }
}

