import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducer';
import userReducer from './reducers/userReducer'
import bucketReducer from './reducers/bucketReducer'
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        productReducer,
        categoryReducer,
        userReducer,
        bucketReducer
    }),
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)