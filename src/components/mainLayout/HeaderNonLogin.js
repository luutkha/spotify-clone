import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNonLogin = () => {
    return (
        <div className='headerNonLogin '>
            {/* <img style={{ width: "20px" }} src="https://i.scdn.co/image/ab6775700000ee85d31bccdcb5cee3a3b5838f71" alt="Italian Trulli" /> */}

            <Link to="/register"><button type="button" className="btn__nonBg  ">Sign up</button></Link>
            {/* <Link to="/login"><button type="button" className="btn__primary " >Login</button></Link> */}
            <a className="btn__primary "  href='https://accounts.spotify.com/authorize?client_id=aa81c8b08f9847ccb97d12ed03dccd34&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=user-read-playback-state%20user-read-currently-playing%20user-read-private%20user-read-email%20user-follow-read%20streaming%20app-remote-control%20user-read-playback-position%20user-top-read%20user-read-recently-played%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public'  style={{ backgroundColor: '#1DB954', color: 'white' }}>Sign In</a>

            <div style={{ width: "15px" }}></div>

        </div>
    )
}

export default HeaderNonLogin
