import * as ActionsTypes from './favoriteTypes'


export function addToFavorite(payload) {
    return {
        type: ActionsTypes.ADD_TO_FAVORITE,
        payload: payload
    }
}

export function removeFromFavorite(payload) {
    return {
        type: ActionsTypes.REMOVE_FROM_FAVORITE,
        payload
    }
}