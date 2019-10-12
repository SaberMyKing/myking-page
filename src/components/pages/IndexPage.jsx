import React from 'react'
import Banner from '../Banner'
import '../../stylesheets/Page.css'

class IndexPage extends React.Component {
    render() {
        return (
            <div class='index-page'>
                <Banner />
                This is IndexPage.
            </div>
        );
    }
}

export default IndexPage;
