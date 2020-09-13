import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cart/cartReducer';
import { userReducer } from './user/userReducer';
import { favoriteReducer } from './favorite/favoriteReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoriteReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;