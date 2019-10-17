import React from 'react';
import { Remarkable } from 'remarkable';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { markdown: "- 简单有效，无需额外的后端存储，开箱即用；\n" +
        "- 相对与其他存储方式，它很快，只需解密，无 IO 请求；\n" +
        "- 因为 Session 加密存储在用户浏览器，所以不回因为后端存储丢失而导致 Session 失效；\n" +
        "- 我们依然可以通过改变 secure_key_base 的方式来使之前的 Session 失效；" }
    }

    getRawMarkup() {
        let markdown = new Remarkable();
        return { __html: markdown.render(this.state.markdown) };
    }

    render() {
        return (
            <div>
                <div className="content" 
                    dangerouslySetInnerHTML={ this.getRawMarkup() } />
            </div>
        )
    }
}

export default Article;
