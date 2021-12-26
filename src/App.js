import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./assets/css/styles.css";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  getTokenWhenRefreshPage } from "./redux/action/actLogin";
import qs from 'qs';
import Loading from "./components/else/Loading";
import { getMyListArtist } from "./redux/action/actArtist";

const maproutes = routes.map((route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  );
});
let refreshToken = sessionStorage.getItem('refreshToken')
function App() {
  const dispatch = useDispatch()
  let data = qs.stringify({

    "grant_type": "refresh_token",
    "refresh_token": refreshToken,
    "client_id": "aa81c8b08f9847ccb97d12ed03dccd34",

  })
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    dispatch(getTokenWhenRefreshPage(data))
      .then(() => {

        

        setisLoading(false)
      })
    
     
     
  }, [dispatch,data])
  return (
    <Router>

      <div className="App">

        {isLoading && <Loading />}
        <Switch>{maproutes}</Switch>

      </div>
    </Router>
  );
}

export default App;
