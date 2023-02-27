import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src="assets/logo.png" alt="" className="loginLogo" />
                    <span className="loginDesc">
                        Bonga helps you Connect with friends and the world around you.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;