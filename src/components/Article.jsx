import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>Apple is a great company. { this.props.id }</div>
        )
    }
}

export default Article;
