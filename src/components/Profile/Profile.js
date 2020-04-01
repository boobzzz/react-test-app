import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as A from '../../utils/api.js';

import Loader from '../Loader/Loader';
import classes from './Profile.module.css';

const Profile = (props) => {
    const { authError, profile } = props;

    useEffect(() => {
        const fetchData = async () => {
            props.onComponentMount(profile)

            const API_SOURCE = 'https://api.github.com/graphql'
            const query = `query {
                user (login: "boobzzz") {
                    name
                    avatarUrl(size: 150)
                    bio
                }
            }`;
            const data = await A.fetchGQL(API_SOURCE, query)

            return props.onComponentMount(data.user)
        }
        fetchData()
    }, [])

    return (
        props.loading
        ? <Loader />
        : <div>
            <div className={classes.ProfileBox}>
                <img src={profile.avatarUrl} alt={profile.name}/>
                <h3>{profile.name}</h3>
                <p><i>{profile.bio}</i></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        loading: state.profile.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentMount: (obj) => dispatch(
            {type: 'FETCH_PROFILE', fetched_profile: obj}
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
