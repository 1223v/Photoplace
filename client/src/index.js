import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore , compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import persistedReducer from './_reducers';	// 추가
import { persistStore } from 'redux-persist';	// 추가
import { PersistGate } from 'redux-persist/integration/react';	// 추가
import storage from 'redux-persist/lib/storage'

const store = createStore(persistedReducer, compose(
    applyMiddleware(promiseMiddleware, ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
const persistor = persistStore(store)	// 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	
	
  <React.StrictMode>
		<Provider
			store={store}
			
			>
			
			<PersistGate persistor={persistor}>	// 추가
			<App />
		</PersistGate>
		</Provider>
    
  </React.StrictMode>
		
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
