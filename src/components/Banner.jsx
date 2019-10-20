import React from 'react';
import '../stylesheets/Common.css';

class Banner extends React.Component {
    render() {
        return (
            <div className='banner-container'>
                <img src='/banner.png' className='banner'></img>
            </div>
        );
    }
}

export default Banner;
