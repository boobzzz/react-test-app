import React from 'react';
import classes from './Article.module.css'

const Article = (props) => {
    return (
        <div className={classes.ArticleBox}>
            <div className={classes.ArticleHeader}>
                <h3>{props.name}</h3>
                <span>Author: {props.author}</span>
            </div>
            <div className={classes.ArticleDesc}>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Article;
