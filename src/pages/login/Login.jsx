/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import './login.css';
import './utils.css';
function Login({onSwitch}) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleEmail= (event)=>{
 setEmail(event.target.value);
  }
  const handlePassword= (ev)=>{
    setPassword(ev.target.value);
  }
  const handleSubmit=(evt)=>{
    evt.preventDefault();
  }
  return (
          <form className="login100-form validate-form" id='login' onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-43">
              Login to continue
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input className="input100" type="text" name="email" value={email} onChange={handleEmail}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Email</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input className="input100" type="password" name="pass"  value={password} onChange={handlePassword}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="txt1">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">or sign up</span>
            </div>
            <p className='login login100-form-title p-b-43' onClick={onSwitch}>Create Account ? </p>
          </form>

  );
}

export default Login;
