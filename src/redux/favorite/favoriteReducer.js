import * as ActionsTypes from './favoriteTypes'


const initialState = {
    favorites: []
}

export function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case ActionsTypes.ADD_TO_FAVORITE :
                    const thereIs = state.favorites.some((el) => el.id === action.payload.favorites.id)
                    if (thereIs )  return {...state}
                    else return {...state, favorites: [...state.favorites, action.payload.favorites]  }
                  
                    
                   
                  
               
        case ActionsTypes.REMOVE_FROM_FAVORITE:
           
                    const newArray = state.favorites.filter(el =>  el.id !== action.payload.id)
                    console.log(newArray)
                    return {...state, favorites:newArray} 
        default:
            return state
    }
}

