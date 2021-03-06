import * as actionTypes from '../actions/actionTypes';
const initialState = {
    ingredients : null,
    totalPrice: 25,
    error: false
};
const INGREDIENT_PRICES = {
    salad : 5,
    cheese : 10,
    meat : 12.5,
    bacon: 5.5
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.ADD_INGREDIENT):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case(actionTypes.REMOVE_INGREDIENT):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 25,
                error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error: true
            };
        default:
            return state;
    }
};
export default reducer;
