/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useRef} from 'react';
import './styles.css'
import './utils.css'
function Login({onSwitch}) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const inputRefs = useRef([]);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  let valid = true;
  const handleBlur = (index) => (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      inputRefs.current[index].classList.add("has-val");
    } else {
      inputRefs.current[index].classList.remove("has-val");
    }
  };
  
  const validateEmail = (email) => {
    if (!email) {
      setEmailError('Email is required');
      inputRefs.current[0].classList.add('alert-validate');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Valid email is required: ex@abc.xyz"');
      inputRefs.current[0].classList.add('alert-validate');
      valid = false;
    } else {
      setEmailError('');
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError('Password is required');
      inputRefs.current[1].classList.add('alert-validate');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      inputRefs.current[1].classList.add('alert-validate');
      valid = false;
    } else if (!/\d/.test(password)) {
      setPasswordError('Password must contain at least one number');
      inputRefs.current[1].classList.add('alert-validate');
      valid = false;
    } else if (!/[a-zA-Z]/.test(password)) {
      setPasswordError('Password must contain at least one letter');
      inputRefs.current[1].classList.add('alert-validate');
      valid=false;
    } else {
      setPasswordError('');
      inputRefs.current[1].classList.remove('alert-validate');
      inputRefs.current[1].classList.add('has-valid-input');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = inputRefs.current[0];
    const passwordInput = inputRefs.current[1];
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);
    if (isEmailValid && isPasswordValid) {
      console.log('Form submitted successfully');
      // TODO: Add your form submission logic here
    } else {
      console.log('Form submission failed');
    }
  };
  const handleEmail= (event)=>{
 setEmail(event.target.value);
  }
  const handlePassword= (ev)=>{
    setPassword(ev.target.value);
  }

  
  return (
      <form className="login100-form validate-form" id='login' onSubmit={handleSubmit}>
        <span className="login100-form-title p-b-43">
          Login to continue
        </span>
        <div className={`wrap-input100 validate-input ${emailError ? 'alert-validate' : 'has-valid-input'}`} data-validate={emailError}>
          <input type="text" name="email" className="input100" onChange={handleEmail} value={email} ref={(el) => (inputRefs.current[0] = el)} onBlur={handleBlur(0)}/>
          <span className="focus-input100"></span>
          <span className="label-input100">Email</span>
        </div>
        <div className={`wrap-input100 validate-input ${passwordError ? 'alert-validate' : 'has-valid-input'}`} data-validate={passwordError}>
          <input type="password" name="pass" className="input100"  onChange={handlePassword} value={password} ref={(el) => (inputRefs.current[1] = el)} onBlur={handleBlur(1)}/>
          <span className="focus-input100"></span>
          <span className="label-input100">Password</span>
        </div>
        <div className="flex-sb-m w-full p-t-3 p-b-32">
          <div className="contact100-form-checkbox">
            <input type="checkbox" name="remember-me" id="ckb1" className='input-checkbox100' />
            <label htmlFor="ckb1" className="label-checkbox100">Remember me</label>
        </div>
        <div>
            <a href="#" className="txt1">Forgot Password?</a>
        </div>
        </div>
        <div className="container-login100-form-btn">
          <button className='login100-form-btn'>Login</button>
        </div>
        <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or</span>
        </div>
        <div className="login100-form-social flex-c-m">
            <span onClick={onSwitch}>Create an Account</span>
        </div>
      </form>
        
  );
}

export default Login;
