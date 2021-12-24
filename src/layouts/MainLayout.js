import React from 'react'
import LeftMenu from '../components/leftMenu/LeftMenu'
import MainLayoutContent from '../components/mainLayout/MainLayoutContent'
import PlayBar from '../components/playBar/PlayBar'

const MainLayout = () => {
    return (
        <div className='row'>
           <LeftMenu/>
           <MainLayoutContent />
           <PlayBar/>
        </div>
    )
}

export default MainLayout
