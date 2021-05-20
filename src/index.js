import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from 'react-redux'
import BrowserRouter from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


const store = createStore( applyMiddleware(thunk))
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
