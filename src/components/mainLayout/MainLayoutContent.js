import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LoggedInContent from '../../views/loggedIn/LoggedInContent'
import Content from '../../views/nonlogin/Content'
import HeaderLogged from './HeaderLogged'
import HeaderNonLogin from './HeaderNonLogin'

const MainLayoutContent = () => {
  const authentication = useSelector(state => state.authentication)
  const [queryForSearch, setqueryForSearch] = useState("")
  const onChange = (values) => {
    setqueryForSearch(values)
   
}
  return (
    <div className='col-10 mainContent'>
      {authentication.isLoggin === false ?  <HeaderNonLogin /> : <HeaderLogged onChange={onChange} />}
     
      {authentication.isLoggin === false  ?  <Content /> : <LoggedInContent queryForSearch={queryForSearch}/>}
      

    </div>
  )
}

export default MainLayoutContent

