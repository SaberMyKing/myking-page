import React from 'react';
import '../../stylesheets/Page.css';
import '../../stylesheets/navigation-bar.css';
import Article from '../Article';

class AboutPage extends React.Component {
    render() {
        return (
            <div className='about-me-container'>
                <div className='about-me'>
                    <img className='about-me-img' src='/myface.jpg' alt="sabermyking"></img>
                    <div className='about-me-description'>
                        <Article id='关于我' className='profile-details' />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
