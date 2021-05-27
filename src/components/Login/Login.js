import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Login.css";

const API_PORT = process.env.REACT_APP_DEV_API_PORT
    ? process.env.REACT_APP_DEV_API_PORT
    : "8080"; //! this fixes the problem if you have the variable defined in env, but if you don't the problem that existed going into this pull request will be untouched as some api requests are going to port 3000 and others to 8080. It makes a bunch of sense to choose either 3000 or 8080 for the hardcoded value, but I didn't want to make changes that surprise anyone. Just couldn't work on this feature with this issue on my end, so thats why I asked about inserting this ternary.

async function loginUser(credentials) {
    return fetch(`http://localhost:${API_PORT}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

export default function Login({ setToken, toggleWantsSingup }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
    };
    return (
        <div
            className="container login-wrapper"
            style={{ textAlign: "center" }}
        >
            <h1
                className="row twelve columns"
                id="loginHead"
                style={{ backgroundColor: "white", padding: "50px" }}
            >
                Welcome to
            </h1>
            <img
                className="row"
                id="showImage"
                src="https://i.imgur.com/MrZnEeq.png"
                alt="on the run"
                style={{ margin: "50px" }}
            />
            <form className="container loginForm" onSubmit={handleSubmit}>
                <div className="row">
                    <h3 style={{ color: "teal" }}>Login</h3>
                </div>
                <div className="row">
                    <p>Username</p>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    <button
                        type="submit"
                        style={{ backgroundColor: "teal", color: "white" }}
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Link to="/signup" onClick={(e) => toggleWantsSingup(e)}>
                or signup
            </Link>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
