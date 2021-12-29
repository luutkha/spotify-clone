import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import { setSelectedTrack } from '../../redux/action/actTrack';
const Play = () => {
    const dispatch = useDispatch()
    const authentication = useSelector(state => state.authentication)
    const playDetail = useSelector(state => state.selectedTrack)
    console.log(playDetail)
    if (!authentication.user.access_token) return <div>Error when loading player. Please refresh page</div>;
    const closePlayBar = () =>{
        dispatch(setSelectedTrack(playDetail.uris,false))
    }
    return (
        <div className='playBar'> {playDetail.uri} <SpotifyPlayer styles={{
            activeColor: '#1cb954',
            bgColor: '#121212',
            color: '#FFFFFF',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#FFFFFF',
        }} autoPlay="true" token={authentication.user.access_token} showSaveIcon uris={playDetail.uris ? [playDetail.uris] : []} />
            <div><button className='btn__primary' onClick={()=>closePlayBar()}>Close</button></div>
        </div>

    )
}

export default Play
