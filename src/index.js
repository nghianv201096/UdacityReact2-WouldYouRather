import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux'
import './index.css';
import App from './components/App';
import reducers from './reducers';
import middlewares from './middlewares';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

const store = createStore(
  reducers,
  middlewares,
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);