import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Login.css";

const API_PORT = process.env.REACT_APP_DEV_API_PORT
    ? process.env.REACT_APP_DEV_API_PORT
    : "3000";

const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://on-the-run-project-3.herokuapp.com"
        : `http://localhost:${API_PORT}`;

async function loginUser(credentials) {
    return fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

export default function Login({
    setToken,
    toggleWantsSignup,
    setUserName: setUser,
}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
        setUser(username);
    };
    return (
        <div
            className="container login-wrapper"
            style={{ textAlign: "center" }}
        >
            <h5
                className="row twelve columns"
                id="loginHead"
                style={{ backgroundColor: "white", padding: "50px" }}
            >
                “I often hear someone say I’m not a real runner. We are all
                runners, some just run faster than others. I never met a fake
                runner.”
                <br />– Bart Yasso
            </h5>
            <img
                className="row"
                id="showImage"
                src="https://i.imgur.com/MrZnEeq.png"
                alt="on the run"
                style={{ margin: "50px" }}
            />
            <form
                className="container loginForm"
                style={{ border: "solid rgb(68,240,226) 2px" }}
                onSubmit={handleSubmit}
            >
                {/* <div className="row">
                    <h3 style={{ color: "black" }}>Login</h3>
                </div> */}
                <div className="row">
                    <p style={{ color: "rgb(3,182,227)", fontWeight: "600" }}>
                        Username
                    </p>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <p style={{ color: "rgb(3,182,227)", fontWeight: "600" }}>
                        Password
                    </p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "rgb(68,240,226)",
                            color: "black",
                        }}
                    >
                        Login
                    </button>
                </div>
                <div className="row">
                    <Link to="/signup" onClick={(e) => toggleWantsSignup(e)}>
                        <button style={{ color: "black", marginTop: "40px" }}>
                            Or Sign Up
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
