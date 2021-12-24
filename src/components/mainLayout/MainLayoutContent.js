import React from 'react'
import Content from '../../views/nonlogin/Content'
import HeaderNonLogin from './HeaderNonLogin'

const MainLayoutContent = () => {
    return (
        <div className='col-10 mainContent'>
          <HeaderNonLogin/>
          <Content/>
        </div>
    )
}

export default MainLayoutContent

