// added lines (2-19)
// import React, { useState } from 'react';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Preferences from "./components/Preferences/Preferences";
import useToken from "./components/App/useToken";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    // added lines 26-31
    // const token = getToken();
    // const [token, setToken] = useState();
    const { token, setToken } = useToken();
    if (!token) {
        return <Login setToken={setToken} />;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <Header />
                </div>
            </div>
            {/* Added the following as well */}
            {/* <h1>RUN</h1> this doesn't work for anything but run so commented out because very confusing */}
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
            {/* Added the above, Lines 38-49 */}
            <div className="row">
                <div className="twelve columns">
                    <Main />
                </div>
            </div>
        </div>
    );
}

export default App;
