import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const lengthCheck = password.length >= 8;
        const uppercaseCheck = /[A-Z]/.test(password);
        const lowercaseCheck = /[a-z]/.test(password);
        const digitCheck = /\d/.test(password);
        const specialCharCheck = /[!@#$%^&*]/.test(password);

        return lengthCheck && uppercaseCheck && lowercaseCheck && digitCheck && specialCharCheck;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email address is invalid");
        } else if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character");
        } else {
            setError("");
            const atIndex = email.indexOf('@');
            const username = email.substring(0, atIndex);
            alert(`Form submitted! Welcome, ${username}`);


        }
    };

    return (
        <div className="container form-container py-5">
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link dm-sans-medium ft-16 active" href="#sign-in">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link dm-sans-medium ft-16" href="#register">Register</a>
                </li>
            </ul>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className={`form-control ${error ? "is-invalid" : ""}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput2">Email</label>
                        </div>
                        <div className="mb-3 position-relative form-floating">
                            <input
                                type="password"
                                className={`form-control ${error ? "is-invalid" : ""}`}
                                id="userPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="userPassword">Password</label>
                            <span className="position-absolute end-0 top-50 translate-middle-x me-2">
                                <i className="bi bi-eye-slash"></i>
                            </span>
                        </div>
                        {error && <div className="text-danger mb-3">{error}</div>}
                        <div className="form-check mb-3">
                            <div className="row">
                                <div className="col-6">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label dm-sans-regular ft-15">Keep me signed in</label>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="dm-sans-medium ft-15 text-decoration-underline">Lost Your Password?</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-custom btn-block dm-sans-medium ft-15">Login</button>
                        </div>
                    </form>
                    <div className="or-divider dm-sans-regular ft-16">
                        <span>OR</span>
                    </div>
                    <div className="row gx-1">
                        <div className="col-6 d-grid mb-3">
                            <button type="button" className="btn btn-outline-primary social-btn social-btn-facebook dm-sans-regular ft-14 py-3">
                                <i className="bi bi-facebook"></i> Login with Facebook
                            </button>
                        </div>
                        <div className="col-6 d-grid mb-3">
                            <button type="button" className="btn social-btn social-btn-google dm-sans-regular ft-14 py-3">
                                <i className="bi bi-google"></i> Login with Google
                            </button>
                        </div>
                    </div>
                    <div className="p-3 bg-light rounded dm-sans-regular ft-15 info-block">
                        <p>Username: <strong>demo@gmail.com</strong></p>
                        <p>Password: <strong>Demo123!</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
