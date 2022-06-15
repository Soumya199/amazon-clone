import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import auth,{createUser,AuthenticateUser} from "../firebase"

function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate=useNavigate()
  const handleOncgange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    AuthenticateUser(auth,credential.email,credential.password)
    .then((user)=>{
      console.log("login res",user)
      navigate("/")
    }).catch((error)=>{
      console.log(error.message)
      alert("Please Enter Correct Credential")
    })
  };

  const register = (e) => {
    e.preventDefault();
    createUser(auth,credential.email,credential.password).then((user)=>{
      alert("User Created Successfully")
      navigate("/")
    }).catch((error)=>{
      alert(error.message);
    })
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input name="email" type="email" onChange={handleOncgange} />
          <h5>Password</h5>
          <input name="password" type="password" onChange={handleOncgange} />
          <button className="login-signin-button" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>By Sign in You are agree to Amazon T&C</p>

        <button className="login-register-button" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
