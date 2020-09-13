import * as ActionsTypes from './userTypes'

const initialState = {
    data: null,
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case ActionsTypes.START_LOADING:
            return Object.assign({}, state, {
                loading: true
            });
        case ActionsTypes.UPDATE_USER_DATA:
            return Object.assign({}, state, {
                data: action.payload,
                loading: false,
                error: null
            });
        case ActionsTypes.UPDATE_USER_ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            })
        default:
            return state
    }
}