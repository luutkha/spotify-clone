import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./assets/css/styles.css";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTokenWhenRefreshPage } from "./redux/action/actLogin";
import Loading from "./components/else/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


function App() {

  const dispatch = useDispatch()
  
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    dispatch(getTokenWhenRefreshPage())
      .then(() => {
        setisLoading(false)
      })



  }, [dispatch])
  return (
    <Router>

      <div className="App">

        {isLoading && <Loading />}
        <ToastContainer />
        <Switch>{maproutes}</Switch>

      </div>
    </Router>
  );
}

export default App;
