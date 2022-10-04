import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import configureStore, { history } from './redux/store'
const initialState = {}
const store = configureStore(initialState)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.replaceReducer)}
      <App />
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
