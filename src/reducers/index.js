import userReducer from './UserReducer'
import { userWatcher } from '../saga/userSaga'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'

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

const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(appReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userWatcher)

console.log("my store is ", store)