import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/action/actProfile'

const HeaderLogged = () => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    return (
        <div>
            <div className='headerNonLogin '>
            {/* <img style={{width:"20px"}} src={profile.images[0].url} alt="Italian Trulli" /> */}

            <strong>{profile.display_name}</strong>
            <div style={{width:"15px"}}></div>


            </div>
        </div>
    )
}

export default HeaderLogged
