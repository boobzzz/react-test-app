import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import News from './components/News/News';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

export default function App() {
    return (
        <Router>
            <div>
                <header>
                    <Navigation />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}
