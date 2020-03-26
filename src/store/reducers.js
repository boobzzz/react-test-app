const initialState = {
    articles: [],
}

export const articlesReducer = (state = initialState, action) => {
    if (action.type === 'FETCH') {
        return {...state, articles: [...state.articles, ...action.fetched]}
    }
    return state
}
