import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducer';
import userReducer from './reducers/userReducer'
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        productReducer,
        categoryReducer,
        userReducer
    }),
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)