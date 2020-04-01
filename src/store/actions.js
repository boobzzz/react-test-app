import firebase from '../config/fbConfig';

export const logIn = (credentials) => (dispatch, getState) => {
    console.log(credentials);
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err })
    })
}
