import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

function callUserService(url) {
    //axios.post('http://localhost:8080/user',{user:"dummy", email: "dummy@gmail.com"})
    //.then(res => {console.log("response is", res)}, err => {console.error("error while posting data", err)})
    return axios.get(url).then(data => {
        return new Promise((resolve, reject) => {
            try {
                resolve({response:data.data})
            } catch (e) {
                reject(e)
            }
        })
    }, err => console.log(err))
    // return new Promise((resolve, reject) => {
    //     try {
    //         resolve({user:"Bhargo", email:"bhargo@yahoo.com"})
    //     } catch (e) {
    //         reject(e)
    //     }
    // })
    //axios.get(url).then(data => console.log(">>>> done ", data))  
}

function callUserServiceCreateUser(action) {
    console.log(">>> creating user", action)
    return axios.post('http://localhost:8080/user', action.payload)
}

export function* userWatcher() {
    yield takeLatest('GET_ALL_USERS', getAllUsers)
    yield takeEvery('CREATE_USER', createUser)
}

export function* getAllUsers() {
    try {
        const users = yield call(callUserService,'http://localhost:8080/user')
        console.log("users are >>>>> ", users)
        yield put({type:'GET_ALL_USERS_SUCCESS', payload:users.response})
    } catch (e) {

    }
}

export function* createUser(action) {
    try {
        yield call(callUserServiceCreateUser, action)
    } catch (e) {

    }
}