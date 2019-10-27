import React from 'react';
import '../../stylesheets/Page.css';
import '../../stylesheets/navigation-bar.css';
import Article from '../Article';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div class='about-me-container'>
                <div class='about-me'>
                    <img class='about-me-img' src='/myface.jpg'></img>
                    <div class='about-me-description'>
                        <Article id='关于我'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
