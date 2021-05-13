import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './index'
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;