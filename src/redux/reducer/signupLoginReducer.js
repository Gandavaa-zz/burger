
const initialState = {
    saving: false, 
    loginIn: false,    
    firebaseError: null,
    token:null,
    userID: null
}

const reducer  = (state = initialState, action) => {
    switch(action.type){
        case 'SIGNUP_USER_START' : 
            return {
                ...state,
                saving: true
            };

        case 'SIGNUP_USER_ERROR' : 
            return {
                ...state,
                saving: false, 
                firebaseError: action.error.response.data.error.message
            };
        
        case 'SIGNUP_USER_SUCCESS' : 
            return {
                ...state,
                saving: false, 
                token:action.data.idToken,
                userId:action.data.localId
            };

        case 'LOGIN_USER_START' : 
            return {
                ...state,
                loginIn: true
            };

        case 'LOGIN_USER_ERROR' : 
            return {
                ...state,
                loginIn: false, 
                firebaseError: action.error.response.data.error.message, 
                firebaseErrorCode: action.error.response.data.error.code, 
                
            };
        
        case 'LOGIN_USER_SUCCESS' : 
            return {
                ...state,
                loginIn: false, 
                token:action.token,
                userId:action.userId
            };

        case 'LOGOUT' : 
            return {
                ...state,
                loginIn: false, 
                token:null,
                userId:null,
                firebaseError: null
            };
            
        default: 

        return state;        
    }
};

export default reducer;