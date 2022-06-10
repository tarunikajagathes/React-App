import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Clock from './components/clock';
import Toggle from './components/toggle';
import LoginControl from './components/loginControl';
import List from './components/list';
import NameForm from './components/form';
import Calculator from './components/calculator';
import {FancyBorder} from './components/childeren';
import Product from './components/product';
import BlurExample from './components/blur';
import ErrorBoundary from './components/errorBoundary';

const Welcome= React.lazy(()=>import('./components/welcome'))
const root = ReactDOM.createRoot(document.getElementById('root'));
const number=[1,2,3,4,5];
root.render(
  <React.StrictMode>
    <App/>
    <Suspense fallback={<div>Loading...</div>}>
    <Welcome names='Tarun'/>
    </Suspense>
    <ErrorBoundary>
    <Clock />
    </ErrorBoundary>
    <Toggle />
    <LoginControl/>
    <List numbers={number}/>
    <NameForm/>
    <Calculator/>
    <FancyBorder>
      <h1>
        Welcome
      </h1>
      <p>
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
    <Product/>
    <BlurExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
