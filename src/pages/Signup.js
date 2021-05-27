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
        <div className="login-wrapper">
            {failedCreation ? (
                <h1 style={{ color: "red" }}>
                    Signup Error. Please try again.
                </h1>
            ) : (
                <h1>Please Signup With a New Username and Password</h1>
            )}

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
