import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'
import NavBar from "./components/views/NavBar/NavBar"
import MovieDetail from "./components/views/MovieDetail/MovieDetail"

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />

          <Route ex path="/login" component={Auth(LoginPage, false)} />

          <Route path="/register" component={Auth(RegisterPage, false)} />
          
          <Route path="/movie/:movieId" component={Auth(MovieDetail, null)} />

        </Switch>
      </div>
    </Router>
  );
}

export default App
