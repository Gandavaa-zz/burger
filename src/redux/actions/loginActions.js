import axios from 'axios';

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
                dispatch(loginUserSuccess(result.data))
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

export const loginUserSuccess = (data) => {
    return {
        type: 'LOGIN_USER_SUCCESS',
        data
    };
};

export const loginUserError = error => {
    return {
        type: 'LOGIN_USER_ERROR',
        error
    };
};
