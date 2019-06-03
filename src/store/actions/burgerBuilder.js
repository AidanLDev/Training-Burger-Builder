import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

// export const fetchIngredeintsFailed = () => {
//     return {
//         type: actionTypes.FETCH_INGREDIENTS_FAILED
//     }
// }

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://aidans-burger-builder.firebaseio.com/ingredients.json')
        .then(response => {
            console.log('(burgerBuilder actions) ', response)
            dispatch(setIngredients(response.data));
        })
        .catch((error) => console.log('(burgerBuilder actions) catch ', error))
        // .catch(error => {
        //     dispatch(fetchIngredeintsFailed())
        // })
    }
}