import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/navigation-bar.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item_class: 'navigation-item' }
    }

    render() {
        return (
            <div className='navigation-bar-box'>
                <div className='navigation-bar'>
                    <div className='navigation-left-box'>
                        <NavigationItem link_to='/' display='茵蒂克丝'/>
                        <NavigationItem link_to='/articles/details/1' display='菲特'/>
                        <NavigationItem link_to='/articles' display='阿尼妹'/>
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

                {/* <img src='/myface.jpg' className='navigation-myface-details' onMouseOver={ ()=>console.log('over')} alt='This is SaberMyKing.'></img> */}
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

export default NavigationBar;
