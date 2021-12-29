import React from 'react'
import { useSelector } from 'react-redux'
import LeftMenu from '../components/leftMenu/LeftMenu'
import MainLayoutContent from '../components/mainLayout/MainLayoutContent'
import AdsBanner from '../components/playBar/AdsBanner'
import Play from '../components/playTrack.js/Play'

const MainLayout = () => {
    const authentication = useSelector(state => state.authentication)
    const playDetail = useSelector(state => state.selectedTrack)
    return (
        <div className='row'>
           <LeftMenu/>
           <MainLayoutContent />
           
          {authentication.isLoggin===false && <AdsBanner/> }
          {playDetail.isVisible &&<div className='playBar'>
            <Play accessToken={authentication.user.access_token}  uris="spotify:track:5Z9KJZvQzH6PFmb8SNkxuk"/>
        </div> }

        </div>
    )
}

export default MainLayout
