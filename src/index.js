import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './welcome';
import Clock from './clock';
import reportWebVitals from './reportWebVitals';
import Toggle from './toggle';
import LoginControl from './loginControl';
import List from './list';
import NameForm from './form';

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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
