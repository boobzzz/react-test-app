import React, { useState, useEffect } from 'react';
import * as A from '../../utilities/api.js';

import Article from './Article/Article'

const API_SOURCE = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-23&sortBy=publishedAt&apiKey=65dfd0d404834ea98af2ffe8f1dd8db5'

const News = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await A.fetchGET(API_SOURCE)
            console.log(data.articles);
            setArticles(data.articles)
        }
        fetchData()
    }, [])

    return (
        <section>
            {articles.map((article, i) =>
                <Article
                    key={i}
                    name={article.title}
                    author={article.author}
                    desc={article.description} />)}
        </section>
    )
}

export default News;
