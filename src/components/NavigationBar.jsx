import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className='navigation-bar-box'>
                <div className='navigation-bar'>
                    <div className='navigation-left-box'>
                        <div className='navigation-item'><Link to='/'>茵蒂克丝</Link></div>
                        <div className='navigation-item'><Link to='/articles/details/1'>菲特</Link></div>
                        <div className='navigation-item'><Link to='/articles'>阿尼妹</Link></div>
                    </div>

                    <div className='navigation-right-box'>
                        <div className='navigation-item'><span>路人模式</span></div>
                        <div className='navigation-item'><span>Language</span></div>
                        <div className='navigation-item'>
                            <Link to='/about'>
                                <img src='/myface.jpg' className='navigation-myface' alt='This is SaberMyKing.'></img>
                            </Link>
                        </div>
                    </div>
                </div>

                <img src='/myface.jpg' className='navigation-myface-details' onMouseOver={ ()=>console.log('over')} alt='This is SaberMyKing.'></img>
            </div>
        );
    }
}

export default NavigationBar;
