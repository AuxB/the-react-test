import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Instructions from './Instructions'
import Acceuil from './components/Acceuil'
import Formulaire from './components/Formulaire'


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/formulaire">Formulaire</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/formulaire">
            <Formulaire />
          </Route>
          <Route path="/">
            <Acceuil />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
