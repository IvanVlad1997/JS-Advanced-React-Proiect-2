import * as ActionsTypes from './cartTypes'


export function addToCart(payload) {
    return {
        type: ActionsTypes.ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: ActionsTypes.REMOVE_FROM_CART,
        payload
    }
}