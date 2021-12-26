import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
const Play = ({accessToken,uris}) => {
    if(!accessToken) return <div>Error when loading player</div>;
    return (
        <div className='playBar'> <SpotifyPlayer  token = {accessToken} showSaveIcon uris={uris ? [uris] : []}/></div>
       
    )
}

export default Play
