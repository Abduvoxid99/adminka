import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware,createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {rootReducer} from "./redux/reducer/root.reducer"
import {Provider} from "react-redux"

import App from './App'

import 'antd/dist/antd.css'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)),window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())


ReactDOM.render( <Provider store={store}><App/></Provider>,document.getElementById('root'))


