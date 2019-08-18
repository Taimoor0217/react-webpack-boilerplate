import {createStore , applyMiddleware , compose} from 'redux' 
import thunk from "redux-thunk"
import rootReducer from './Reducers/root'
const initialstate = {}
const middleware = [
                    thunk
                   ]
const store = createStore ( //Create the store to be used by the Provider
                            rootReducer , 
                            initialstate , 
                            compose(
                                applyMiddleware(...middleware), //destructure the array of middleware
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            )
                          )
export default store