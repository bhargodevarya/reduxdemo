import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

function callUserService(url) {
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

export function* userWatcher() {
    yield takeEvery('GET_ALL_USERS', getAllUsers)
}

export function* getAllUsers() {
    try {
        const users = yield call(callUserService,'http://localhost:8080/user')
        console.log("users are >>>>> ", users)
        yield put({type:'GET_ALL_USERS_SUCCESS', payload:users.response})
    } catch (e) {

    }
}