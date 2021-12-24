import React from 'react'
import LeftMenu from '../components/leftMenu/LeftMenu'
import MainLayoutContent from '../components/mainLayout/MainLayoutContent'

const MainLayout = () => {
    return (
        <div className='row'>
           <LeftMenu/>
           <MainLayoutContent />
           
        </div>
    )
}

export default MainLayout
