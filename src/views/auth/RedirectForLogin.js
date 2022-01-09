import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login } from '../../redux/action/actLogin';
import qs from 'qs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const RedirectForLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    const authentication = useSelector(state => state.authentication)
    console.log(code)


    
    let data = qs.stringify({
        "code": code,
        "grant_type": "authorization_code",
        "redirect_uri": "http://localhost:3000/redirect",
        "client_id": "aa81c8b08f9847ccb97d12ed03dccd34",
        "client_secret": "f9425bd74abe40aabb855dd0d952a4d6"
    })
    useEffect(() => {
        dispatch(login(data))
    }, [])
    return (
        <div>
            {typeof authentication.user.access_token ==='undefined' ?  <strong>Redirect for Login ...</strong>: history.push("/")}
        </div>
    )
}

export default RedirectForLogin
