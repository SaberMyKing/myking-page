import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div class='navigation-bar-box'>
                <div class='navigation-bar'>
                    <div class='navigation-left-box'>
                        <div class='navigation-item'><Link to='/'>茵蒂克丝</Link></div>
                        <div class='navigation-item'><Link to='/articles'>菲特</Link></div>
                        <div class='navigation-item'><Link to='/articles'>阿尼妹</Link></div>
                    </div>

                    <div class='navigation-right-box'>
                        <div class='navigation-item'>
                            <Link to='/about'>
                            <img src='/myface.jpg' class='navigation-myface' alt='This is SaberMyKing.'></img>
                            </Link>
                        </div>
                        <div class='navigation-item'><span>路人模式</span></div>
                    </div>
                </div>

                <img src='/myface.jpg' class='navigation-myface-details' onMouseOver={ ()=>console.log('over')} alt='This is SaberMyKing.'></img>
            </div>
        );
    }
}

export default NavigationBar;
