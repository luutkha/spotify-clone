import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Content from '../../views/nonlogin/Content'
import HeaderLogged from './HeaderLogged'
import HeaderNonLogin from './HeaderNonLogin'

const MainLayoutContent = () => {
  const history = useHistory()
  const authentication = useSelector(state => state.authentication)
  
  return (
    <div className='col-10 mainContent'>
      {authentication.isLoggin === false ?  <HeaderNonLogin /> : <HeaderLogged/>}

     
      <Content />
    </div>
  )
}

export default MainLayoutContent

