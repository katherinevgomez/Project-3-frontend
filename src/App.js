// added lines (2-19)
import React, { useState } from "react";
// import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./pages/Signup";
// import Preferences from "./components/Preferences/Preferences";
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
    //darkmode
    const [darkMode, setDarkmode] = React.useState(false);

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
        // const currentMode = JSON.parse(json);
    }, [darkMode]);

    // added lines 26-31
    // const token = getToken();
    // const [token, setToken] = useState();
    const { token, setToken } = useToken();
    const [userName, setUserName] = useState("");
    const [wantsSignup, setWantsSignup] = useState(
        window.location?.href.split("/").pop() === "signup"
    );
    const history = useHistory();
    const toggleWantsSignup = (event) => {
        event.preventDefault();
        setWantsSignup(!wantsSignup);
    };
    if (!token) {
        if (wantsSignup) {
            setTimeout(() => {
                // hack that squashes warning if immediately history.push before return...
                history.push("/signup");
            }, 1);
            return (
                <Route exact path="/signup">
                    <Signup
                        wantsSignup={wantsSignup}
                        toggleWantsSignup={toggleWantsSignup}
                    />
                </Route>
            );
        } else {
            return (
                <Login
                    setToken={setToken}
                    wantsSignup={wantsSignup}
                    toggleWantsSignup={toggleWantsSignup}
                    setUserName={setUserName}
                />
            );
        }
    }
    if (window.location?.href.split("/").pop() === "signup") {
        setTimeout(() => {
            // hack that squashes warning if immediately history.push before return...
            history.push("/");
        }, 1);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <Header />
                    {/*darkmode button*/}
                    <button className="darkMode" onClick={() => setDarkmode(!darkMode)}>
                        Toggle Theme
                    </button>
                </div>
            </div>
            {/* Added the following as well */}
            {/* <h1>RUN</h1> this doesn't work for anything but run so commented out because very confusing */}
            {/* <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter> */}
            {/* Added the above, Lines 38-49 */}
            <div className="row">
                <div className="twelve columns">
                    <Main userName={userName} token={token} />
                </div>
            </div>
        </div>
    );
}

export default App;
