import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/NavigationBar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // IMPORTANTE!!!
import ProgressBarComponent from './components/ProgressBarComponent/ProgressBarComponent'; 
import Formulario from './components/Formulario'; 
import Timer from './components/Timer'; 
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import RickMorty from './components/RickMorty/RickMorty';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavigationBar />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
