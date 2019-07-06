import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

//

const GOT_CANDIES = 'GOT_CANDIES'

const gotCandies = (candies) => ({
  type: GOT_CANDIES,
  candies
})

export const getCandies = () => {
  return async (dispatch, getState, {axios}) => {
    const {data} = await axios.get('api/candies')
    dispatch(gotCandies(data))
  }
}

const initialState = {
  candies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, candies: action.candies}
    default:
      return state
  }
}

//

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)
