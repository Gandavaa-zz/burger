import axios from 'axios';

export const singupUser = (email, password) => {
    // thunk connection return function
    return function(dispatch){
        dispatch(singupUserStart())

        const data = { 
            email, 
            password, 
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXMC2SDEroloy8ZIKivl4H8XD71cLQbsI', data)
            .then(result => {
                dispatch(singupUserSuccess(result.data))
            })
            .catch(err => {
                dispatch(singupUserError(err))
            });        
    };
};

export const singupUserStart = () => {
    return {
        type: 'SIGNUP_USER_START'        
    };
};

export const singupUserSuccess = (data) => {
    return {
        type: 'SIGNUP_USER_SUCCESS',
        data
    };
};

export const singupUserError = error => {
    return {
        type: 'SIGNUP_USER_ERROR',
        error
    };
};
