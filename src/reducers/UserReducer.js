/**
 * 
 Reducers are used to modify the state of the application.
 These are JS functions that accept 2 params, the current state and the invoked action.
 As app developers we dont invoke these reducers. Its the job of the redux/react-redux lib to 
 invoke them.
 Reducers dont mutate the current state, they return a new state after performing the 
 correct operation for the incoming action.
 A reducer must return the existing state if it does not react to the incoming action  
 */

const userReducer = (currentState = [], action) => {
    if (action.type === 'CREATE_USER') {
        console.log("creating user ", [...currentState, action.payload])
        return [...currentState]
    } else if (action.type === 'REMOVE_USER') {
        return currentState.filter(item => item.email !== action.payload.email)
    } else if (action.type === 'GET_ALL_USERS') {
        console.log("getting all users", currentState)
        return currentState;
    } else if (action.type === 'GET_ALL_USERS_SUCCESS') {
        console.log("from reducer, current state", currentState)
        console.log("from reducer, new state", action.payload)
        return action.payload;
    } 
    else {
        console.log("action received", action.type)
        return currentState
    }
}
export default userReducer