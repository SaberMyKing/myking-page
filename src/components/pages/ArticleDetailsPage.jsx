import React from 'react';
import { useParams } from "react-router-dom";

function ArticleDetailsPage() {
    let { id } = useParams();

    return (
        <div>
            ArticlePage { id }
        </div>
    );
}

export default ArticleDetailsPage;
