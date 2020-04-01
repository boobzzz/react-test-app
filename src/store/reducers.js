const initialState = {
    isLoading: false,
    articles: [],
    authError: false,
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
        console.log('Login Success')
        return {...state, authError: true}
    }
    if (action.type === 'LOGIN_ERROR') {
        console.log('Login Failed')
        return {...state, authError: false}
    }
    return state
}
