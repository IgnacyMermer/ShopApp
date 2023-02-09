import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer'
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        productReducer
    }),
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)