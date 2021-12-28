import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/action/actProfile'

const HeaderLogged = ({onChange}) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
  
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
 
    return (
        <div>
            <div className='headerLogin'>
                <div class="headerLogin__child2">
                    <input className='input__radius' onChange={(event) => onChange(event.target.value)} placeholder="Enter artist, track & album" />
                </div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>
                {/* {profile.images[0].url && <img className='headerLogin__child' style={{ width: "20px" }} src={profile?.images[0].url} alt="Italian Trulli" />} */}

                <strong className='headerLogin__child' >{profile.display_name}</strong>


            </div>
        </div>
    )
}

export default HeaderLogged
