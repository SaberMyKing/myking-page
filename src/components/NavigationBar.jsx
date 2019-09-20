import React from 'react';
import '../stylesheets/NavigationBar.css'

class NavigationBar extends React.Component {
    render() {
        return (
            <div class='navigation-bar'>
                <div class='navigation-left-button'>
                    <ul>
                        <li><a href='/' target='_blank'>茵蒂克丝</a></li>
                        <li><a href='/'>菲特今晚留下来</a></li>
                        <li><a href='/'>只有神知道的世界</a></li>
                    </ul>
                </div>

                <div class='navigation-right-button'>
                    <ul>
                        <li>
                            <a href='/about_me' target='_blank'>
                                <image></image>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
