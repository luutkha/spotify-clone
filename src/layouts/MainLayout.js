import React from 'react'
import LeftMenu from '../components/leftMenu/LeftMenu'
import MainLayoutContent from '../components/mainLayout/MainLayoutContent'
import AdsBanner from '../components/playBar/AdsBanner'

const MainLayout = () => {
    return (
        <div className='row'>
           <LeftMenu/>
           <MainLayoutContent />
           <AdsBanner/>

        </div>
    )
}

export default MainLayout
