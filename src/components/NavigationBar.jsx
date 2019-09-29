import React from 'react';
import '../stylesheets/NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div class='navigation-bar-box'>
                <div class='navigation-bar'>
                    <div class='navigation-left-box'>
                        <div class='navigation-item'><a href='/'>茵蒂克丝</a></div>
                        <div class='navigation-item'><a href='/articles'>菲特</a></div>
                        <div class='navigation-item'><a href='/articles'>阿尼妹</a></div>
                    </div>

                    <div class='navigation-right-box'>
                        <div class='navigation-item'><a href='/about'>
                            <img src='/myface.jpg' class='navigation-myface' alt='This is SaberMyKing.'></img>
                        </a></div>
                        <div class='navigation-item'><span>路人模式</span></div>
                    </div>
                </div>

                <img src='/myface.jpg' class='navigation-myface-details' onMouseOver={ ()=>console.log('over')} alt='This is SaberMyKing.'></img>
            </div>
        );
    }
}

export default NavigationBar;
