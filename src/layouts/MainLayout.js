import React from 'react'
import { useSelector } from 'react-redux'
import LeftMenu from '../components/leftMenu/LeftMenu'
import MainLayoutContent from '../components/mainLayout/MainLayoutContent'
import AdsBanner from '../components/playBar/AdsBanner'

const MainLayout = () => {
    const authentication = useSelector(state => state.authentication)
    return (
        <div className='row'>
           <LeftMenu/>
           <MainLayoutContent />
           
          {authentication.isLoggin===false && <AdsBanner/> }

        </div>
    )
}

export default MainLayout
