import axios from 'axios';
import * as actions from "./signupActions";

export const loginUser = (email, password) => {
    // thunk connection return function
    return function(dispatch){

        dispatch(loginUserStart())

        const data = { 
            email, 
            password, 
            returnSecureToken: true
        }

        console.log('email'+email, 'password'+password);
        
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXMC2SDEroloy8ZIKivl4H8XD71cLQbsI', data)
            .then(result => {
                const token = result.data.idToken;
                const userId = result.data.localId;
                const expiresIn = result.data.expiresIn;
                const expiresDate = new Date(new Date().getTime + expiresIn + 1000);
                const refreshToken = result.data.refreshToken;
                
                // save to localStorage these values
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                
                dispatch(loginUserSuccess(token, userId))
                // when this session expired
                dispatch(actions.autoLogoutAfterMillsec(expiresIn))                
            })
            .catch(err => {
                dispatch(loginUserError(err))
            });        
    };
};

export const loginUserStart = () => {
    return {
        type: 'LOGIN_USER_START'        
    };
};

export const loginUserSuccess = (token, userId) => {
    return {
        type: 'LOGIN_USER_SUCCESS',
        token,
        userId
    };
};

export const loginUserError = error => {
    return {
        type: 'LOGIN_USER_ERROR',
        error
    };
};
