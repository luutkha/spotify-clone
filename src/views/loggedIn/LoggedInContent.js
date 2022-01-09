import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecommentList from '../../components/recommentComponent/RecommentList';
import { getMyListArtist } from '../../redux/action/actArtist';
import { getMyTracks } from '../../redux/action/actTrack';
import SearchResult from '../search/SearchResult';
const LoggedInContent = ({ queryForSearch }) => {

    const dispatch = useDispatch()
    const myListArtist = useSelector(state => state.myArtist)
    const myListTracks = useSelector(state => state.myTracks)
    
    useEffect(() => {
        dispatch(getMyListArtist())
        dispatch(getMyTracks())

    }, [dispatch])
    return (
        <div style={{minHeight:'1700px'}}>
            {queryForSearch !== "" ? <SearchResult queryForSearch={queryForSearch}/> : <div><RecommentList title="Your Artist" list={myListArtist} type="artist" /><RecommentList title="Your Tracks" list={myListTracks} type="album" /></div>}
            
        </div>
    )
}

export default LoggedInContent
