/**
 *
 Actions represent events in a react app.
 There can be mutiple events that relate to the same entity.
 For exmaple, for a user entity, there are events like
 creating a user, deleting a user, updating a user etc etc.
Action is just a plain JS object that contains only 2 fields,
type and payload.
{
    type:String
    payload: Object
}

type mentions the type of the event.
Based on the type various downstreams can choose to act on the event.
payload represents the data that is generated with the event.

for example when a create user event is triggered,
payload would consist of the details of the newly created user.
 */

export const createUser = (name, email) => {
    console.log("creating user", name)
    return {
        type: "CREATE_USER",
        payload : {
            user: name,
            email: email
        }
    }
}

export const removeUser = (email) => {
    console.log("creating user")
    return {
        type: "REMOVE_USER",
        payload : {
            email: email
        }
    }
}

export function getAllUsers() {
    return function(dispatch) {
        return dispatch(getAllUsersAction())
    }
}

export function getAllUsersAction() {
    return {
        type:'GET_ALL_USERS',
        payload: {}
    }
}