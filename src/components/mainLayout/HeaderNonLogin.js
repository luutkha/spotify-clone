import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNonLogin = () => {
    return (
        <div className='headerNonLogin '>

            <Link to="/login"><button type="button" class="btn__primary right " >Login</button></Link>

           <Link to="/register"><button type="button" class="btn__nonBg right ">Sign up</button></Link> 
        </div>
    )
}

export default HeaderNonLogin
