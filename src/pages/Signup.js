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
                    <h3 style={{ color: "teal" }}>Signup</h3>
                    {failedCreation ? (
                        <h6 style={{ color: "red" }}>
                            Signup Error. Please try again.
                        </h6>
                    ) : null}
                </div>
                <div className="row">
                    <p>Username</p>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <p>Password</p>
                    <input
                        type="password"
                        required
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
        </div>
    );
}
