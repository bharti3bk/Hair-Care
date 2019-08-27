import React from 'react';
import './App.css'; 
import LoginForm from '../src/Components/Login'
import RegisterForm from './Components/Register' 
import {Route ,BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import HairStylist from './Components/HairStylist'

function App({isLoggedIn}) {

  const isUserLoggedIn = isLoggedIn || localStorage.getItem('token') !== null

  return (  
    <Router>
    <div className="App">
      {isUserLoggedIn ? <Route exact path = "/" component = {HairStylist}/> : <Route exact path = "/" component = {LoginForm}/> }
      <Route path = "/reg" component = {RegisterForm} />
    </div>
    </Router>
   
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
