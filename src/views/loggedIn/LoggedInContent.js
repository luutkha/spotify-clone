import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecommentList from '../../components/recommentComponent/RecommentList';
import { getMyListArtist } from '../../redux/action/actArtist';
import SearchResult from '../search/SearchResult';
const LoggedInContent = ({ queryForSearch }) => {

    const dispatch = useDispatch()
    const myListArtist = useSelector(state => state.myArtist)
    const profile = useSelector(state => state.profile)
    
    useEffect(() => {
        dispatch(getMyListArtist())

    }, [dispatch])
    return (
        <>
            {queryForSearch !== "" ? <SearchResult queryForSearch={queryForSearch}/> : <div><RecommentList title="Your Artist" list={myListArtist} type="artist" /></div>}
        </>
    )
}

export default LoggedInContent
