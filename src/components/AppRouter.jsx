import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function AppRouter() {
    return (
        <Router>
            <Route path = "/" component = { IndexPage } />
            <Route path = "/article" component = { ArticlePage } />
            <Route path = "/home" component = { HomePage } />
        </Router>
    );
}

export default AppRouter;
