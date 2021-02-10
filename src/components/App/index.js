import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './style.scss'

const HomePage = lazy(() => import("pages/Home"))
const GamePage = lazy(() => import("pages/Game"))

const App = () => (
  <HashRouter>
        <Suspense fallback={null} >
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/game" component={GamePage} />
            </Switch>
        </Suspense>
    </HashRouter>
)

export default App

