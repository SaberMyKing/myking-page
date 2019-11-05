import React from 'react';
import Banner from '../Banner';
import '../../stylesheets/Page.css';
import ArticleList from '../ArticleList';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [
                { title: '骑士王的荣耀', content: '2000年前的英格兰，一位名叫【阿莉斯托蕾雅】的16岁少女默默的走来...', cover_img: '/fate.jpg' },
                { title: '红宝石', content: '起源于日本，发扬于美国...', cover_img: '/ruby.jpg' },
            ]
        }
    }

    render() {
        return (
            <div>
                <Banner />
                <ArticleList items={ this.state.article_items }/>
            </div>
        );
    }
}

export default IndexPage;
