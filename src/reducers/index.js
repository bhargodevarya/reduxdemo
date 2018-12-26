import userReducer from './UserReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

/**
 createStore is used to create the cumalative state of the application.
 For this it must combine all the reducers in the application.
 For combining reducers, combineReducers function is used.

 There are other overloaded versions of the createStore and combineReducers function
 not shown here.
 */

const appReducers = combineReducers({
    user: userReducer
})

export const store = createStore(appReducers, applyMiddleware(thunk, reduxImmutableStateInvariant()))

console.log("my store is ", store)