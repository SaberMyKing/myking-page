import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function AppRouter() {
    return (
        <Router>
            <Route path = "/" component = { IndexPage } />
            <Route path = "/articles" component = { ArticlePage } />
            <Route path = "/home" component = { HomePage } />
            <Route path = "/about" component = { AboutPage } />
        </Router>
    );
}

export default AppRouter;
