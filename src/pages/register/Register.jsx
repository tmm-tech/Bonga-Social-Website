import React,{useState} from 'react'
import '../login/login.css';
import '../login/utils.css';
function Register({onSwitch}) {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");

    const handleEmail= (event)=>{
        setEmail(event.target.value);
    }
    const handleUsername= (event)=>{
        setUsername(event.target.value);
    }
    const handleConfirmPassword= (event)=>{
        setConfirmPassword(event.target.value);
    }
    const handlePassword= (ev)=>{
        setPassword(ev.target.value);
    }
    const handleSubmit=(evt)=>{
      evt.preventDefault();
    }
  return (
        <form className="login100-form validate-form" id='signup' onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-43 signup100">
              Create Account ?
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid username is required"
            >
              <input className="input100" type="text" name="username" value={username} onChange={handleUsername}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Username</span>
            </div>
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
              <input className="input100" type="password" name="pass" value={password} onChange={handlePassword} />
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input className="input100" type="password" name="confirmpass" value={confirmpassword} onChange={handleConfirmPassword} />
              <span className="focus-input100"></span>
              <span className="label-input100">Confirm Password</span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Register</button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">or sign in</span>
            </div>
            <p className='signin login100-form-title p-b-43' onClick={onSwitch}>Already have an Account?</p>
          </form>
  )
}

export default Register
