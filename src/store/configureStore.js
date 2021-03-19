import { createStore, combineReducers, applyMiddleware } from 'redux'
import CharityReducer from '../reducers/CharityReducer'
import thunk from "redux-thunk";
const configureStore = () => {
    const store = createStore(
        combineReducers({
            charity: CharityReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}

export default configureStore;