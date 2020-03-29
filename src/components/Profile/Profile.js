import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from '../../utils/api.js';

import Loader from '../Loader/Loader';

const Profile = (props) => {
    const { profile } = props;

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
            <div>
                <img src={profile.avatarUrl} alt={profile.name}/>
                <h3>{profile.name}</h3>
                <p>{profile.bio}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.p.isLoading,
        profile: state.p.profile,
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
