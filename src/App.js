import React from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import SignIn from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>  

    <Route exact path='/'>
    <Home/> 
    </Route>

    <Route path='/SignIn'>
    <SignIn/> 
    </Route>

    <Route path='/Profile'>
    <Profile/>
    </Route>

    <Route path='/Signup'>
    <Signup /> 
    </Route>

    </BrowserRouter>
  );
}

export default App;
