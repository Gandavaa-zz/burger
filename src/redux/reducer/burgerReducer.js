// muhain state deer orj irsen action-р үйлдэл хийнэ.

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0, 
        meat: 0
    },
    totalPrice: 0,
    purchasing: false, 
    ingredientNames: {
        bacon: 'Гахайн мах',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах',
        salad: 'Салад'
    }
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
// Always return new object

const reducer = (state = initialState, action)  => {
    if (action.type === 'ADD_INGREDIENT'){  
        return {
            ...state,
            ingredients: {
               ...state.ingredients,
               [action.ortsNer]: state.ingredients[action.ortsNer]+1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
            purchasing: true
        }
    }else if (action.type === 'REMOVE_INGREDIENT'){
        console.log(action.ortsNer)
        const newPrice =state.totalPrice - INGREDIENT_PRICES[action.ortsNer]
        return {
            ...state,
            ingredients: {
               ...state.ingredients,
               [action.ortsNer]: state.ingredients[action.ortsNer] - 1
            },
            totalPrice: newPrice,
            purchasing: newPrice > 1000
        }
    }else if (action.type === 'CLEAR_ORDER'){
        // console.log(action.ortsNer);
        return initialState
        
    }

    return state
}

export default reducer;