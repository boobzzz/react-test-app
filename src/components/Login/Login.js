import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as A from '../../store/actions';
import classes from './Login.module.css';

const Login = (props) => {
    const { authError, logIn } = props;
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    if (authError) return <Redirect to="/profile" />

    const handleChange = (e) => {
        setValue({
            ...value, [e.target.id]: e.target.value
        })
    }

    const onUserSubmit = (e) => {
        e.preventDefault()
        logIn(value)
    }

    return (
        <section>
            <div className={classes.FormBox}>
                {authError ? <p>Invalid Username or Password!</p> : null}
                <form>
                    <label>
                        <h3>Username</h3>
                        <input type="text" id="email" onChange={handleChange}/>
                    </label>
                    <label>
                        <h3>Password</h3>
                        <input type="text" id="password" onChange={handleChange}/>
                    </label>
                    <input
                        type="submit"
                        className={classes.Button}
                        value="LOGIN"
                        onClick={onUserSubmit}/>
                </form>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.login.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(A.logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
