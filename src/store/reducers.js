import * as A from '../utils/api.js';

const API_SOURCE = 'http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=65dfd0d404834ea98af2ffe8f1dd8db5'

const initialState = {
    articles: [],
}

export const articlesReducer = async (state = initialState, action) => {
    const data = await A.fetchGET(API_SOURCE)
    console.log(data.articles);

    if (action.type === 'FETCH') {
        return {
            ...state,
            articles: [...state.articles, data.articles]
        }
    }
    console.log(state.articles);
}
