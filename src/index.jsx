import  React from "react";
import  ReactDOM from "react-dom";
import App from "./Components/App.jsx";
import {Provider} from "react-redux" //Import Provider
import store from './store'
ReactDOM.render(
    // Do the initial Setup for redux
    <Provider store = {store}>  
        <App/>
    </Provider>
    ,document.getElementById("app"),
);
 