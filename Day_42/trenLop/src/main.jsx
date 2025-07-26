import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {increase, store} from './store/index.js'
import { Provider } from 'react-redux'
import {fetchProducts} from './store/index.js'

const {dispatch} = store
dispatch(fetchProducts())


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
