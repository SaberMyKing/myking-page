import React from 'react'
import NavigationBar from '../NavigationBar'
import Banner from '../Banner'
import '../../stylesheets/Page.css'
import GithubCorner from 'react-github-corner';

class IndexPage extends React.Component {
    render() {
        return (
            <div class='index-page'>
                <GithubCorner href='https://github.com/sabermyking/myking-page' />
                <NavigationBar />
                <Banner />
            </div>
        );
    }
}

export default IndexPage;
