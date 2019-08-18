import {combineReducers} from 'redux'
import  PostReducer from './PostReducer'

export default combineReducers({ //Root reducers to combine all the reducers which the app will use. Add import and add the new reducers to the JSON
    Posts : PostReducer
})