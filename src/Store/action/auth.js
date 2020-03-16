import axios from 'axios';
import * as actionTypes from './actionTypes';
import config from '../../config'
import jwt_decode from 'jwt-decode'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    console.log(username, password)
    return dispatch => {
        dispatch(authStart());
        axios.post(config.API_URL + '/auth/jwt/create', {
            // username: 'Adam9999',
            // password: 'Adam1234!!'
            username: username,
            password: password
        })
        .then(res => {
            // console.log("Auth response : ", res)
            // console.log("config.API_URL  : ", config.API_URL )
            // console.log('Response',res)

            const token = res.data.access;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            let decodedToken = jwt_decode(token);
            // console.log('Decoded c¡token',decodedToken)

            const user_uuid = decodedToken.uuid;
            
            localStorage.setItem('user_uuid', user_uuid);
            // console.log('User UUID saved',user_uuid)
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })


    }
}

export const authSignup = (username, email, password) => {
    
    console.log('username and password', username, password)
    return dispatch => {
        dispatch(authStart());
        axios.post(config.API_URL + '/auth/users/', {
            username: username,
            email: email,
            password: password
        })
        .then(res => {
            console.log("Auth response : ", res)
            console.log("config.API_URL  : ", config.API_URL )
            this.props.history.push('dashboard')
            
            // const token = res.data.key;
            // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            // localStorage.setItem('token', token);
            // localStorage.setItem('expirationDate', expirationDate);
            // dispatch(authSuccess(token));
            // dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
