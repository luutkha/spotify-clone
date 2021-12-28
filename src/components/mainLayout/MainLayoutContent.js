import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoggedInContent from '../../views/loggedIn/LoggedInContent'
import Content from '../../views/nonlogin/Content'
import HeaderLogged from './HeaderLogged'
import HeaderNonLogin from './HeaderNonLogin'

const MainLayoutContent = () => {
  const history = useHistory()
  const authentication = useSelector(state => state.authentication)
  const [queryForSearch, setqueryForSearch] = useState("")
  const onChange = (values) => {
    setqueryForSearch(values)
    console.log(values)
}
  return (
    <div className='col-10 mainContent'>
      {authentication.isLoggin === false ?  <HeaderNonLogin /> : <HeaderLogged onChange={onChange} />}
     
      {authentication.isLoggin === false  ?  <Content /> : <LoggedInContent queryForSearch={queryForSearch}/>}

    </div>
  )
}

export default MainLayoutContent

