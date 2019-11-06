import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/navigation-bar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className='banner-container'>
                <div className='navigation-bar-box'>
                    <div className='navigation-bar'>
                        <div className='navigation-left-box'>
                            <NavigationItem link_to='/' display='Home'/>
                            <NavigationItem link_to='/articles/details/骑士王的荣耀' display='Fate'/>
                            <NavigationItem link_to='/articles/details/红宝石' display='Ruby'/>
                            <NavigationItem link_to='/release-log' display='Release Log'/>
                        </div>

                        <div className='navigation-right-box'>
                            <div className='navigation-item'><span>Language</span></div>
                            <NavigationAvatar link_to='/about' src='/myface.jpg' alt='This is SaberMyKing.' />
                        </div>
                    </div>

                    {/* <img src='/myface.jpg' className='navigation-myface-details' onMouseOver={ ()=>console.log('over')} alt='This is SaberMyKing.'></img> */}
                </div>
            </div>
        );
    }
}

class NavigationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: 'navigation-item' };
        this.showHover = this.showHover.bind(this);
        this.hideHover = this.hideHover.bind(this);
    }

    showHover() {
        this.setState({ class: 'navigation-item navigation-item-selected' })
    }

    hideHover() {
        this.setState({ class: 'navigation-item' })
    }

    render() {
        return (
            <Link to={ this.props.link_to }
                className={this.state.class}
                onMouseEnter={ this.showHover }
                onMouseLeave={ this.hideHover } >
                <span>{ this.props.display }</span>
            </Link>
        )
    }
}

class NavigationAvatar extends NavigationItem {
    render() {
        return (
            <Link to={ this.props.link_to }
                className={this.state.class}
                onMouseEnter={ this.showHover }
                onMouseLeave={ this.hideHover } >
                <img src={ this.props.src } className='navigation-myface' alt='This is SaberMyKing.'></img>
            </Link>
        )
    }
}

export default NavigationBar;
