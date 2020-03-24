import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import News from './components/News/News'
import Login from './components/Login/Login'

export default function App() {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                </Switch>
            </main>
        </div>
    )
}
