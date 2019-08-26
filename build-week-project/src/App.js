import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import LoginForm from '../src/Components/Login'
import RegisterForm from './Components/Register' 
import {Link ,Route ,BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (  
    <Router>
    <div className="App">  
    <Route exact path = "/" component = {LoginForm}/>
    <Route path = "/reg" component = {RegisterForm} />
    </div>
    </Router>
   
  );
}

export default App;
