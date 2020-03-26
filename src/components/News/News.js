import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as A from '../../utils/api.js';

import Article from './Article/Article'

const News = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            const API_SOURCE = 'http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=65dfd0d404834ea98af2ffe8f1dd8db5'
            const data = await A.fetchGET(API_SOURCE)
            return props.onComponentMount(data.articles)
        }
        fetchData()
    }, [])

    console.log(props.articles)
    return (
        <section>
            {props.articles.map((article, i) =>
                <Article
                    key={i}
                    name={article.title}
                    author={article.author}
                    desc={article.description} />)}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentMount: (arr) => dispatch({type: 'FETCH', fetched: arr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
