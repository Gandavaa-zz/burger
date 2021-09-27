const initialState = {    
    orders: [
         [ "-MkbItobuO7o3xzQhsZm", 
             {
                 "dun":2700,
                 "hayag":{
                     city:"Ulaanbaatar",
                     name:"Saraa",
                     street:"HUD 4-р хороолол" 
                    },
                 "orts":{"bacon":1,"cheese":1,"meat":1,"salad":1}            
             }
        ]
    ],
    loading: false    
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_ACTIONS'){
        return {
            ...state, 
            loading: true
        }
    }
    return state;
}

export default reducer;