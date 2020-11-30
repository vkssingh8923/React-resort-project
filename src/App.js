import React, { Component } from "react";
import {Rooms} from './pages/Rooms'
import {Home} from './pages/Home'
import {SingleRoom} from './pages/SingleRoom'
import Error from './pages/Error'
import NavBar from './components/Navbar'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (<>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/rooms" component={Rooms}/> 
      <Route exact path="/singleroom" component={SingleRoom}/> 
      <Route exact path="/error" component={Error}/> 
      <Route component={Error}/>
    </Switch>
      </>)
  }}
export default App;
