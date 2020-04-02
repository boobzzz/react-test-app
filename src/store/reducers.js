const initialState = {
    isLoading: false,
    articles: [],
    authError: null,
    profile: {}
}

export const articlesReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_NEWS') {
        return {
            ...state,
            isLoading: !state.isLoading,
            articles: [...action.fetched_articles]
        }
    }
    return state
}

export const profileReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_PROFILE') {
        return {
            ...state,
            isLoading: !state.isLoading,
            profile: {...state.profile, ...action.fetched_profile}
        }
    }
    return state
}

export const authReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return {...state, authError: false}
    }
    if (action.type === 'LOGIN_ERROR') {
        return {...state, authError: true}
    }
    return state
}
