import React from 'react'
import { useSelector } from 'react-redux'
import Play from '../../components/playTrack.js/Play'

const ArtistPlayList = () => {
    const authentication = useSelector(state => state.authentication)
    return (
        <div className='playBar'>
            <Play accessToken={authentication.user.access_token}  uris="spotify:track:5Z9KJZvQzH6PFmb8SNkxuk"/>
        </div>
    )
}

export default ArtistPlayList
