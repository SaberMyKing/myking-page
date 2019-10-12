import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import { ArticlePage, ArticlesPage } from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NavigationBar from './NavigationBar'
import GithubCorner from 'react-github-corner';
import './../stylesheets/Page.css'

function AppRouter() {
    return (
        <Router>
            <div class='page'>
                <GithubCorner href='https://github.com/sabermyking/myking-page' />
                <NavigationBar />

                <Switch>
                    <Route exact path="/"><IndexPage /></Route>
                    <Route path="/articles"><ArticlesPage /></Route>
                    <Route path="/articles/:id"><ArticlePage /></Route>
                    <Route path="/about"><AboutPage /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
