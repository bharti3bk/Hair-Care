import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import LoginForm from '../src/Components/Login'
import RegisterForm from './Components/Register'

function App() {
  return (
    <div className="App">
      <h1>LoginForm</h1> 
      <LoginForm />   
      <h1>RegisterForm</h1> 
      <RegisterForm />  
    </div>
  );
}

export default App;
