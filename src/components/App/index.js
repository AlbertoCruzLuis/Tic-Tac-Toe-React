import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import GamePage from '../../pages/Game';
import './style.scss'

const App = () => (
  <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/game" component={GamePage} />
        </Switch>
    </HashRouter>
)

export default App

