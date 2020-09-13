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
                  
                    
                   
                  
               
        // case ActionsTypes.REMOVE_FROM_CART:
        //     const filteredProducts = state.products.filter(product => {
        //         return product.id !== action.payload.id
        //     });

        //     return Object.assign({}, state, {
        //         products: filteredProducts
        //     });
        default:
            return state;
    }
}

