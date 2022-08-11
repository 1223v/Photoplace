import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore ,compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk';
import  persistedReducer from './_reducers';
import { persistStore } from 'redux-persist';	// 추가
import { PersistGate } from 'redux-persist/integration/react';	// 추가
import storage from 'redux-persist/lib/storage'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {BrowserRouter} from 'react-router-dom';
const store = createStore(persistedReducer, compose(
    applyMiddleware(promiseMiddleware, ReduxThunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
const persistor = persistStore(store)	// 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	
	
  <React.StrictMode>
		<BrowserRouter>
		<Provider
			store={store}
			
			>
			
			<PersistGate persistor={persistor}>	
			
			<App />
			
		</PersistGate>
		</Provider>
    </BrowserRouter>
  </React.StrictMode>
		
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
