import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/Common.css';

class ArticleList extends React.Component {
    render() { 
        return (
            <div className='article-list-container'>
                {
                    this.props.items.map(
                        (item, key) => 
                            <ArticleItem title={ item.title }
                                img_src={ item.img_src }
                                content={ item.content }
                                key={ key } />)
                }
            </div>
        )
    }
}

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: 'article-list-item-container' };
        this.showHover = this.showHover.bind(this);
        this.hideHover = this.hideHover.bind(this);
    }

    showHover() {
        this.setState({ class: 'article-list-item-container navigation-item-selected' })
    }

    hideHover() {
        this.setState({ class: 'article-list-item-container' })
    }

    render() {
        return (
            <Link className={ this.state.class }
                to={ `/articles/details/${ this.props.title }` }
                onMouseEnter={ this.showHover }
                onMouseLeave={ this.hideHover }>
                <div className='article-list-item'>
                    <b className='article-list-item-title'>{ this.props.title }</b>
                    <div className='article-list-item-desc-container'>
                        <img className='article-list-item-img' src={ this.props.img_src } alt='article-img'></img>
                        <article className='article-list-item-desc'>{ this.props.content }</article>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ArticleList;

