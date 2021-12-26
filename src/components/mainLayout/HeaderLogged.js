import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/action/actProfile'

const HeaderLogged = () => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    const [query, setquery] = useState("")
    const onChange = (values) => {
        setquery(values)
        console.log(values)
    }
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    const handleSearch = (values) => {
        console.log(values.target[0].value)
    }
    return (
        <div>
            <div className='headerLogin'>
                {/* <img style={{width:"20px"}} src={profile.images[0].url} alt="Italian Trulli" /> */}
                <div class="headerLogin__child2">
                    <input className='input__radius' onChange={(event) => onChange(event.target.value)} placeholder="Enter artist, track & album" />
                </div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>

                <strong className='headerLogin__child' >{profile.display_name}</strong>


            </div>
        </div>
    )
}

export default HeaderLogged
