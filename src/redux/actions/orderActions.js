import axios from '../../axios-orders';
// if (function returns thunk knows it and use it with dispatch)
export const loadOrders = () => {
    return function (dispatch){
        // Dispatch that Order to start loading 
        // After recieve request Spinner starts 
        dispatch(loadOrdersStart());

        // Catch data from firebase      
        axios
            .get('/orders.json')
            .then(response => {
                // if its successed we call dispatch fn
                const loadedOrders = Object.entries(response.data).reverse();
                dispatch(loadOrdersSuccess(loadedOrders));    
                //if its failed call error dispatch fn
            }).catch(err => dispatch(loadOrdersError(err)));
        //    .finally(() => { this.setState({ loading: false }) });
    }
};

// These actions used for thunk
export const loadOrdersStart = () => {
    return { 
        type: "LOAD_ORDERS_START"        
    }
}

export const loadOrdersSuccess = (loadedOrders) => {
    return { 
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    }
}

export const loadOrdersError = (error) => {
    return { 
        type: "LOAD_ORDERS_ERROR", 
        error 
    }
}
