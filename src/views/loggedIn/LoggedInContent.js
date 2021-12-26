import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecommentList from '../../components/recommentComponent/RecommentList';
import { getMyListArtist } from '../../redux/action/actArtist';
const LoggedInContent = () => {

    const dispatch = useDispatch()
    const myListArtist = useSelector(state => state.myArtist)
    const profile = useSelector(state => state.profile)
    //   console.log(profile)
    //   console.log(myListArtist)
    useEffect(() => {
        dispatch(getMyListArtist())

    }, [dispatch])
    return (
        <>
            <RecommentList title="Your Artist" list={myListArtist} type="artist" />

        </>
    )
}

export default LoggedInContent
