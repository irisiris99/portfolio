import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './component/Scrolltop';

// About
const age:string = '26 Years';
const nationality:string = 'South Korea';
const adress:string = '서울특별시 서초구';

// Contact
const phone:string = '0 1 0 - 6 8 5 0 - 5 6 0 7';
const github:string = 'https://www.github.com/irisiris99';
const email:string = 'c j g 0 3 1 1 7 @ g m a i l . c o m';

function reducer(state = [age, nationality, adress, phone, github, email]){
  return state
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollTop />
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
