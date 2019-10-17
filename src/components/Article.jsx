import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../stylesheets/Style.scss'

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
            <ReactMarkdown className="article markdown" source={ this.state.text } />
        )
    }
}

export default Article;
