import React from 'react'
import NavigationBar from '../NavigationBar'
import Banner from '../Banner'
import '../../stylesheets/Page.css'
class IndexPage extends React.Component {
    render() {
        return (
            <div class='index-page'>
                <NavigationBar />
                <Banner />
            </div>
        );
    }
}

export default IndexPage;
