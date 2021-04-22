import React, {Component} from 'react';
import './App.css';
import About from "./About"
import Cover from "./Cover"
import Sidebar from "./Sidebar"
import Leaderboard from './Leaderboard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js'
import Header from './Header'
import Practise from './Practise';
import Discussion from './Discussion';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      redirect: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  
    logout() {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null,
            redirect: true
          }
          );
        });

  
    }
    login() {
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
  
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    }
  
  
  render() { 
    return (
        <div> 
        <Header login={this.login} logout={this.logout} user={this.state.user} />
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
              component={Discussion}
            />
            <Route
              path="/Profile"
              component={() => <Profile login={this.login} logout={this.logout} user={this.state.user} />}
            
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
}

export default App;