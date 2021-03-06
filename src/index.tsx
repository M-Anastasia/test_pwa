import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/test_pwa/sw.js', {
            scope: '/test_pwa/'
        }).then((registration) => {
            console.log('Service worker registered successfully', registration);
        }).catch((error) => {
            console.log('Something went wrong', error);
        });
    });
}
window.addEventListener('offline', () => {
    console.log('The network connection has been lost.')
})
window.addEventListener('online', () => {
    console.log('You are now connected to the network.')
})