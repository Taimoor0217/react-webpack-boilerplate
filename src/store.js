import {createStore , applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import rootReducer from './Reducers/root'
const initialstate = {}
const middleware = [
                    thunk
                   ]
const store = createStore ( 
                            rootReducer , 
                            initialstate , 
                            applyMiddleware(...middleware)
                          )
export default store