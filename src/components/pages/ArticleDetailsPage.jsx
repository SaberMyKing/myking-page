import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Article';

function ArticleDetailsPage() {
    let { id } = useParams();

    return (
        <div>
            ArticlePage { id }
            <Article id={ id }/>
        </div>
    );
}

export default ArticleDetailsPage;
