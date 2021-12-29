import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecommentList from '../../components/recommentComponent/RecommentList';
import { getListAlbumWhenSearch } from '../../redux/action/actAlbum';
import { getListArtistWhenSearch } from '../../redux/action/actArtist';
import { getListPlayListWhenSearch } from '../../redux/action/actPlayList';
import { getListTrackWhenSearch } from '../../redux/action/actTrack';
import MatchestResult from './MatchestResult';

const SearchResult = ({queryForSearch}) => {
    const encoded = encodeURI(queryForSearch);
    const dispatch = useDispatch()
    const listArtist = useSelector(state => state.listArtistWhenSearch)
    const listAlbum = useSelector(state => state.listAlbumWhenSearch)
    const listTrack = useSelector(state => state.listTrackWhenSearch)
    const listPlayList = useSelector(state => state.listPlayListWhenSearch)
   
    useEffect(() => {
       dispatch(getListArtistWhenSearch(encoded))
       dispatch(getListAlbumWhenSearch(encoded))
       dispatch(getListTrackWhenSearch(encoded))
       dispatch(getListPlayListWhenSearch(encoded))
    }, [encoded,dispatch])
    return (
        <div>
           {listArtist[0] && <MatchestResult artist = {listArtist[0]} listTrack={listTrack.slice(0,4)}/> }
           {listArtist.length > 0 && <RecommentList title="Artist" list={listArtist.slice(0, 8)} type="artist" />}
           {listAlbum.length > 0 && <RecommentList title="Album & Songs" list={listAlbum.slice(0, 8)} type="album" />}
           {listPlayList.length > 0 && <RecommentList title="Play List" list={listPlayList.slice(0, 8)} type="album" />}
        </div>
    )
}

export default SearchResult
