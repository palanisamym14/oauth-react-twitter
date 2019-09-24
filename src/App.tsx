import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';


export class App extends React.Component<any,any> {
  public render(){  
    const isAuthenticated = this.props.user.isLoggedIn;
  return (
    <div className="App">
      <Router>
        <Switch>
          
            <Route path="/" exact render={() => {
              return !isAuthenticated ? (
                <LoginComponent />
              ) : (
                  <Redirect to="/home" />
                );
            }} />
            <Route path="/home" render={() => {
              return isAuthenticated? (
                <Dashboard />
              ) : (
                  <Redirect to="/" />
                );
            }} />
            <Route render={() => <Redirect to="/" />} />
          {/* </Switch>
          <Route path="/followers" component={Dashboard}></Route>
          <Route path="/login" component={LoginComponent}></Route> */}
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.loginData
})

export default connect(mapStateToProps, { })(App);

