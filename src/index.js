import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const hamburgerIcons = document.querySelectorAll(".app-hamburger-icon");
const navbar = document.querySelector(".navbar");

hamburgerIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    navbar.classList.toggle("navbar-display");
    hamburgerIcons.forEach(icon2 => {
      icon2.classList.toggle("app-hamburger-icon-hide");
    })
  });
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
