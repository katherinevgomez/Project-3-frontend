import { useState } from "react";
import "../components/Login/Login.css";

const API_PORT = process.env.REACT_APP_DEV_API_PORT
    ? process.env.REACT_APP_DEV_API_PORT
    : "3000";

async function signupUser(credentials) {
    return fetch(`http://localhost:${API_PORT}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

export default function Signup(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [failedCreation, setFailedCreation] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signupUser({
            username,
            password,
        });
        if (!res.error) {
            props.toggleWantsSignup(e);
        } else {
            setFailedCreation(true);
        }
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
                “Get going … walk if you have to, but finish the damned race.”
                <br/> 
                – Ron Hill
            </h5>
            <img
                className="row"
                id="showImage"
                src="https://i.imgur.com/MrZnEeq.png"
                alt="on the run"
                style={{ margin: "50px" }}
            />
            <form className="container loginForm" onSubmit={handleSubmit}>
                <div className="row">
                    <h5 style={{ color: "#36bde9", borderBottom:'solid black 2px',paddingBottom:'20px' }}>Create Your Account</h5>
                    {failedCreation ? (
                        <h6 style={{ color: "red" }}>
                            Signup Error. Please try again.
                        </h6>
                    ) : null}
                </div>
                <div className="row">
                    <p style={{color:'rgb(3,182,227)', fontWeight:'600'}}>Username</p>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <p style={{color:'rgb(3,182,227)', fontWeight:'600'}}>Password</p>
                    <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    <button
                        type="submit"
                        style={{ backgroundColor: "rgb(68,240,226)", color: "black" }}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
