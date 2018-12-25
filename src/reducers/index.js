import userReducer from './UserReducer'

import { createStore, combineReducers } from 'redux'

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

export const store = createStore(appReducers)

console.log("my store is ", store)