import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavigationBar from './NavigationBar'
import GithubCorner from 'react-github-corner';

function AppRouter() {
    return (
        <Router>
            <GithubCorner href='https://github.com/sabermyking/myking-page' />
            <NavigationBar />

            <Switch>
                <Route exact path="/"><IndexPage /></Route>
                <Route path="/articles"><ArticlePage /></Route>
                <Route path="/home"><HomePage /></Route>
                <Route path="/about"><AboutPage /></Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
