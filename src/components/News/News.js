import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as A from '../../utilities/api.js';

import Article from './Article/Article'

// const API_SOURCE = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-23&sortBy=publishedAt&apiKey=65dfd0d404834ea98af2ffe8f1dd8db5'

const News = (props) => {
    // const [articles, setArticles] = useState([]);
    console.log(props.articles);

    useEffect(() => {
        return props.onComponentMount
    })

    return (
        <section>
            {/* {props.articles.map((article, i) =>
                <Article
                    key={i}
                    name={article.title}
                    author={article.author}
                    desc={article.description} />)} */}
            NEWS PAGE
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
        onComponentMount: () => dispatch({type: 'FETCH'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
