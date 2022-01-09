import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getUserInfo } from '../../redux/action/actProfile'

const HeaderLogged = ({ onChange }) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    const history = useHistory()
    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])
    const logout = () => {
        console.log("catch logout")
        sessionStorage.removeItem("refreshToken")
        
        //This line refresh current url
        history.go(0)
    }
    return (
        <div>
            <div className='headerLogin'>
                <div className="headerLogin__child2">
                    <input className='input__radius' onChange={(event) => onChange(event.target.value)} placeholder="Enter artist, track & album" />
                </div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>
                <div className='headerLogin__child' style={{ width: "15px" }}></div>
                {/* {profile.images[0].url && <img className='headerLogin__child' style={{ width: "20px" }} src={profile?.images[0].url} alt="Italian Trulli" />} */}

                <strong className='headerLogin__child' style={{marginTop:".5em"}}>{profile.display_name}

                </strong>
                <button onClick={() => logout()} className='headerLogin__child btn__primary' style={{ margin: "0 5em",width:"4em"}}>Log out</button>

            </div>
        </div>
    )
}

export default HeaderLogged
