import { store } from '../reducers/index'
import { createUser, removeUser } from '../actions/actions'

export const storeDemo = () => {

    store.dispatch(createUser("bhargo", "bhargo@gmail.com"));
    store.dispatch(createUser("amar", "amar@gmail.com"));
    store.dispatch(createUser("bob", "bob@gmail.com"));
    console.log("store after creation ", store.getState())
    store.dispatch(removeUser("amar@gmail.com"))
    console.log("store after deletion ", store.getState())
}