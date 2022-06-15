import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider} from './contexts/StateProvider';
import { initialState, reducer } from './contexts/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StateProvider>
);

