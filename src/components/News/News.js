import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from '../../utils/api';

import Article from './Article/Article'
import Loader from '../Loader/Loader';

const News = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            props.onComponentMount(props.articles)
            const API_SOURCE = 'http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=65dfd0d404834ea98af2ffe8f1dd8db5'
            const data = await A.fetchGET(API_SOURCE)
            return props.onComponentMount(data.articles)
        }
        fetchData()
    }, [])

    return (
        <section>
            {props.loading
            ? <Loader />
            : props.articles.map((article, i) =>
                <Article
                    key={i}
                    name={article.title}
                    author={article.author !== null ? article.author : 'Unknown'}
                    desc={article.description} />)}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.news.isLoading,
        articles: state.news.articles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentMount: (arr) => dispatch(
            {type: 'FETCH_NEWS', fetched_articles: arr}
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
