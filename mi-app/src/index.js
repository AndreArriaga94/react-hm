import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<p> hola mundo </p>
const x = React.createElement('p',null,'hola mundo')
const X = () => <p> hola mundo </p>

// const Li = ({ children, estado, edad, casa }) => {

//   console.log(edad, casa)

//   return(
//     <li>{children} {estado}</li>
//   )
// }

// const X = () => 
//   <ul>
//     <Li
//      estado = {'Feliz'}
//      edad = {30}
//      casa = {true}
//     >
//       Ismar
//     </Li>
//     <li>Andre</li>
//     <li>Arriaga</li>
//   </ul>

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <X />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
