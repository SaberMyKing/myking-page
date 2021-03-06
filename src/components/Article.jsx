import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../stylesheets/Style.scss';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { className: this.props.className || '' }
    }

    fetchMarkdown() {
        fetch(`/articles/${this.props.id}.md`)
            .then((response) => response.text())
            .then((text) => this.setState({ text: text }))
    }
    
    componentDidMount() {
        this.fetchMarkdown();
    }

    componentDidUpdate(prevProps) {
        if(this.props.id !== prevProps.id) {
            this.fetchMarkdown();
        }
    }

    render() {
        return (
            <ReactMarkdown className={ `article markdown ${ this.state.className }` } source={ this.state.text } />
        )
    }
}

export default Article;
