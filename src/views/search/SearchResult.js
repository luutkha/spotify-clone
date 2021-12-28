import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecommentList from '../../components/recommentComponent/RecommentList';
import { getListArtistWhenSearch } from '../../redux/action/actArtist';

const SearchResult = ({queryForSearch}) => {
    const encoded = encodeURI(queryForSearch);
    const dispatch = useDispatch()
    const listArtist = useSelector(state => state.listArtistWhenSearch)
    useEffect(() => {
       dispatch(getListArtistWhenSearch(encoded))
    }, [encoded,dispatch])
    return (
        <div>
           {listArtist.length > 0 && <RecommentList title="Artist" list={listArtist.slice(0, 8)} type="artist" />}
        </div>
    )
}

export default SearchResult
