const initialState = {    
    orders: [],
    loading: false, 
    error: null
}

// reducer catches the action has been dispatched
const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_ORDERS_ACTIONS'){
        return {
            ...state, 
            loading: true
        }
    } else if (action.type ==='LOAD_ORDERS_SUCCESS'){
        return {
            ...state, 
            loading: false,
            orders: action.orders
        }
     } else if (action.type ==='LOAD_ORDERS_ERROR'){
        return {
            ...state, 
            loading: false,
            error: action.error
        }
    }

    return state;
}

export default reducer;