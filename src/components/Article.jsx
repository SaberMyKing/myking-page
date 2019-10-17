import React from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentDidMount() {
        fetch(`/articles/${this.props.id}.md`)
            .then((response) => response.text())
            .then((text) => this.setState({ text: text }))
    }

    render() {
        return (
            <div className='markdown'>
                <ReactMarkdown source={ this.state.text } />
            </div>
        )
    }
}

export default Article;
