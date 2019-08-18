import {createStore , applyMiddleware} from 'redux' 
import thunk from "redux-thunk"
import rootReducer from './Reducers/root'
const initialstate = {}
const middleware = [
                    thunk
                   ]
const store = createStore ( //Create the store to be used by the Provider
                            rootReducer , 
                            initialstate , 
                            applyMiddleware(...middleware) //destructure the array of middleware
                          )
export default store