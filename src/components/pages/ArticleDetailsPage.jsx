import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Article';
import '../../stylesheets/article.css'

function ArticleDetailsPage() {
    let { id } = useParams();

    return (
        <div>
            <div className='article-container'>
                <Article id={ id } className='article-details' />
            </div>
        </div>
    );
}

export default ArticleDetailsPage;
