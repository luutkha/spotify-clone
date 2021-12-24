import React, { useState } from 'react'
import spotifyBWLogo from '../../assets/image/Spotify_Logo_RGB_White.png'
const LeftMenu = () => {
    const [activeIndex, setactiveIndex] = useState(0)
    return (
        <div className='col-2 leftmenu ' >
            <img className='leftmenu__image' src={spotifyBWLogo} alt="spotify logo" />
            <div type="button" className={activeIndex!==0 ?'leftmenu__submenu': "leftmenu__submenu__active"} onClick={()=>setactiveIndex(0)}>  Home</div>
            <div type="button" className={activeIndex!==1 ?'leftmenu__submenu': "leftmenu__submenu__active"} onClick={()=>setactiveIndex(1)}>Search</div>
            <div type="button" className={activeIndex!==2 ?'leftmenu__submenu': "leftmenu__submenu__active"}  onClick={()=>setactiveIndex(2)}>Libary</div>

            
        </div>
    )
}

export default LeftMenu
