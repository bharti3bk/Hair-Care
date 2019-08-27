import axios from 'axios';
import {LOGIN_FAILURE, LOGIN_SUCCESS} from '../reducers'

export const loginActionCreator = (username, password) => 
    (dispatch) => {
        axios.post("https://lambda-howto-app.herokuapp.com/api/v1/auth/login",{
            email: username,
            password: password
        }).then(res => {
            dispatch({type:LOGIN_SUCCESS, payload: res.data.body.token})
        }).catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: "Wrong Credentials"})
        })
    }