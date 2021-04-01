import React from 'react';
import './App.css';
import About from "./About"
import Cover from "./Cover"
import Sidebar from "./Sidebar"
import Leaderboard from './Leaderboard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Practise from './Practise';

function App() {
    return (
        <div> 
        <Header />
        <BrowserRouter>
          <Switch>
          <Route
              path="/Practise"
              component={Practise}
            
            />
            <Route
              path="/About"
              component={About}
            
            />
            <Route
              path="/Leaderboard"
              component={Leaderboard}
            />
            <Route
              path="/Discuss"
              component={Sidebar}
            />
             <Route
              path="/"
              component={Cover}
            
            />
          </Switch>
        </BrowserRouter>
        </div>
    );
}

export default App;