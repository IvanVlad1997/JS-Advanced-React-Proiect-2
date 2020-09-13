import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cart/cartReducer';
import { userReducer } from './user/userReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;