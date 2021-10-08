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
                const token = result.data.idToken;
                const userId = result.data.localId;
                // save to localStorage these values
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);

                dispatch(singupUserSuccess(token, userId))
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

export const singupUserSuccess = (token, userId) => {
    return {
        type: 'SIGNUP_USER_SUCCESS',
        token, 
        userId
    };
};

export const singupUserError = error => {
    return {
        type: 'SIGNUP_USER_ERROR',
        error
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    return {
        type: 'LOGOUT'
    };
};
