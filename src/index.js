import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Welcome from './components/welcome';
import Clock from './components/clock';
import Toggle from './components/toggle';
import LoginControl from './components/loginControl';
import List from './components/list';
import NameForm from './components/form';
import Calculator from './components/calculator';
import {FancyBorder} from './components/childeren';
import Product from './components/product';

const root = ReactDOM.createRoot(document.getElementById('root'));
const number=[1,2,3,4,5];
root.render(
  <React.StrictMode>
    <App/>
    <Welcome names='Tarun'/>
    <Clock />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
