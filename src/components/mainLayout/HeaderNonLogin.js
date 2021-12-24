import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNonLogin = () => {
    return (
        <div className='headerNonLogin '>
            {/* <img style={{ width: "20px" }} src="https://i.scdn.co/image/ab6775700000ee85d31bccdcb5cee3a3b5838f71" alt="Italian Trulli" /> */}

            <Link to="/register"><button type="button" class="btn__nonBg  ">Sign up</button></Link>
            <Link to="/login"><button type="button" class="btn__primary " >Login</button></Link>
            <div style={{ width: "15px" }}></div>

        </div>
    )
}

export default HeaderNonLogin
