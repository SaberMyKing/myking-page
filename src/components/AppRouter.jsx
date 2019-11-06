import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import ReleaseLogPage from './pages/ReleaseLogPage';
import NavigationBar from './NavigationBar'
import GithubCorner from 'react-github-corner';
import './../stylesheets/Page.css';

function AppRouter() {
    return (
        <Router>
            <div className='page'>
                <GithubCorner href='https://github.com/sabermyking/myking-page' />
                <NavigationBar />

                <Switch>
                    <Route exact path="/"><IndexPage /></Route>
                    <Route exact path="/articles"><ArticlesPage /></Route>
                    <Route path="/articles/details/:id"><ArticleDetailsPage /></Route>
                    <Route path="/about"><AboutPage /></Route>
                    <Route path="/release-log"><ReleaseLogPage /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
