import React from 'react';
import '../../stylesheets/Page.css';
import ArticleList from '../ArticleList';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [
                { title: '新海诚的天气之子', content: '小评一下新海诚...', cover_img: '/your_name.jpg' },
                { title: '骑士王的荣耀', content: '2000年前的英格兰，一位名叫【阿莉斯托蕾雅】的16岁少女默默的走来...', cover_img: '/saber.jpg' },
                { title: '红宝石', content: '起源于日本，发扬于美国...', cover_img: '/ruby.jpg' },
            ]
        }
    }

    render() {
        return (
            <div>
                <ArticleList items={ this.state.article_items }/>
            </div>
        );
    }
}

export default IndexPage;
