import * as ActionsTypes from './favoriteTypes'


export function addToFavorite(id) {
    return {
        type: ActionsTypes.ADD_TO_FAVORITE,
        payload: id
    }
}

export function removeFromFavorite(payload) {
    return {
        type: ActionsTypes.REMOVE_FROM_FAVORITE,
        payload
    }
}