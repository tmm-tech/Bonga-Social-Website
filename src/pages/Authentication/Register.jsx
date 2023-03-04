/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useRef} from 'react'
import '../Authentication/authentication.css'
import '../Authentication/utils.css'
function Register({onSwitch}) {
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
      fullname: '',
      email: '',
      phonenumber: '',
      password: '',
      confirmPassword: '',
      Image:''
    });
    const [formErrors, setFormError] = useState('');
    const inputRefs = useRef([]);
  
    const handleBlur = (index) => (event) => {
      const inputValue = event.target.value.trim();
      if (inputValue !== '') {
        inputRefs.current[index].classList.add('has-val');
      } else {
        inputRefs.current[index].classList.remove('has-val');
      }

    };
  
    const validateFullName = (fullName) => {
      if (!fullName) {
        setFormError(prevState => ({ ...prevState, fullName:'Full name is required'}));
        inputRefs.current[0].classList.add('alert-validate');
        return false;
      } else {
        setFormError(prevState => ({ ...prevState, fullName:''}));
        inputRefs.current[0].classList.remove('alert-validate');
        inputRefs.current[0].classList.add('has-valid-input');
        return true;
      }
     
    };
  
    const validateUsername = (username) => {
      if (!username) {
        setFormError(prevState => ({ ...prevState, username:'Username is required'}));
        inputRefs.current[1].classList.add('alert-validate');
        return false;
      } else {
        setFormError(prevState => ({ ...prevState, username:''}));
        inputRefs.current[1].classList.remove('alert-validate');
        inputRefs.current[1].classList.add('has-valid-input');
        return true;
      }
    };
  
    const validatePhoneNumber = (phonenumber) => {
      if (!phonenumber) {
        setFormError(prevState => ({ ...prevState, phonenumber:'Phone number is required'}));
        inputRefs.current[2].classList.add('alert-validate');
        return false;
      } else if (!/^[0-9]{10}$/.test(phonenumber)) {
        setFormError(prevState => ({ ...prevState, phonenumber:'Phone Number should be 10 digits'}));
        inputRefs.current[2].classList.add('alert-validate');
        return false;
      } else {
        setFormError(prevState => ({ ...prevState, phonenumber:''}));
        inputRefs.current[2].classList.remove('alert-validate');
        inputRefs.current[2].classList.add('has-valid-input');
        return true;
      }
    };
  
    const validateEmail = (email) => {
      if (!email) {
       setFormError(prevState => ({ ...prevState, email:'Email is required'}));
        inputRefs.current[3].classList.add('alert-validate');
        return false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
       setFormError(prevState => ({ ...prevState, email:'Valid email is required: ex@abc.xyz'}));
        inputRefs.current[3].classList.add('alert-validate');
        return false;
      } else {
       setFormError(prevState => ({ ...prevState, email:''}));
        inputRefs.current[3].classList.remove('alert-validate');
        inputRefs.current[3].classList.add('has-valid-input');
        return true;
      }
    };
  
    const validatePassword = (password) => {
      if (!password) {
      setFormError(prevState => ({ ...prevState, password:'Password is required'}));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
      } else if (password.length < 8) {
      setFormError(prevState => ({ ...prevState, password:'Password should have minimum 8 characters'}));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
      } else if (!/\d/.test(password)) {
      setFormError(prevState => ({ ...prevState, password:'Password should contain at least one digit'}));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
      } else if (!/[!@#$%^&]/.test(password)) {
      setFormError(prevState => ({ ...prevState, password:'Password should contain at least one special character: !@#$%^&'}));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
      } else {
      setFormError(prevState => ({ ...prevState, password:''}));
      inputRefs.current[4].classList.remove('alert-validate');
      inputRefs.current[4].classList.add('has-valid-input');
      return true;
      }
      };
      
      const validateConfirmPassword = (confirmPassword) => {
      if (!confirmPassword) {
      setFormError(prevState => ({ ...prevState, confirmPassword:'Please confirm your password'}));
      inputRefs.current[5].classList.add('alert-validate');
      return false;
      } else if (confirmPassword !== formData.password) {
      setFormError(prevState => ({ ...prevState, confirmPassword:'Passwords do not match'}));
      inputRefs.current[5].classList.add('alert-validate');
      return false;
      } else {
      setFormError(prevState => ({ ...prevState, confirmPassword:'Matched'}));
      inputRefs.current[5].classList.remove('alert-validate');
      inputRefs.current[5].classList.add('has-valid-input');
      return true;
      }
      };
      
      const handleSubmit = (event) => {
      event.preventDefault();
      const isValidFullName = validateFullName(formData.fullName);
      const isValidUsername = validateUsername(formData.username);
      const isValidPhoneNumber = validatePhoneNumber(formData.phonenumber);
      const isValidEmail = validateEmail(formData.email);
      const isValidPassword = validatePassword(formData.password);
      const isValidConfirmPassword = validateConfirmPassword(formData.confirmPassword);
      if (
        isValidFullName &&
        isValidUsername &&
        isValidPhoneNumber &&
        isValidEmail &&
        isValidPassword &&
        isValidConfirmPassword
      ) {
        // submit registration data
        alert('Registration submitted successfully!');
      } else {
        alert('Please correct the errors and try again');
      }
      };
    
  
    const handleInputChange = (evt) => {
      const { name, value } = evt.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleImageSelect = (event) => {
      const selectedImage = event.target.files[0];
      setImage(URL.createObjectURL(selectedImage));
      setFormData((prevData) => ({...prevData, image: selectedImage,}));
    };

  
  return (
        <form className="login100-form validate-form" id='signup' onSubmit={handleSubmit}>
              <div className="profile-image-container signup100">
                    <div className="profile-image">
                      {image ? (
                        <img src={image} alt="profile" />
                      ) : (
                        <i className="fas fa-user-circle fa-7x"></i>
                      )}
                      <div className="camera-icon">
                        <label htmlFor="file-input">
                          <i className="fas fa-camera fa-lg"></i>
                        </label>
                        <input
                          id="file-input"
                          type="file"
                          accept="image/*"
                          onChange={handleImageSelect}
                        />
                      </div>
                    </div>
              </div>
            <br/>
            <span className="login100-form-title p-b-43">
              Register to Continue
            </span>
            <div
              className={`wrap-input100 validate-input ${formErrors.fullName ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.fullname}
            >
              <input className="input100" type="text" name="fullname" value={formData.fullname} onChange={handleInputChange} ref={(el) => (inputRefs.current[0] = el)} onBlur={handleBlur(0)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Full Name</span>
            </div>
            <div
              className={`wrap-input100 validate-input ${formErrors.username ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.username}
            >
              <input className="input100" type="text" name="username" value={formData.username} onChange={handleInputChange} ref={(el) => (inputRefs.current[1] = el)} onBlur={handleBlur(1)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Username</span>
            </div>
            <div
              className={`wrap-input100 validate-input ${formErrors.phonenumber ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.phonenumber}
            >
              <input className="input100" type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange} ref={(el) => (inputRefs.current[2] = el)} onBlur={handleBlur(2)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Phone Number</span>
            </div>
            <div
              className={`wrap-input100 validate-input ${formErrors.email ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.email}
            >
              <input className="input100" type="text" name="email" value={formData.email} onChange={handleInputChange} ref={(el) => (inputRefs.current[3] = el)} onBlur={handleBlur(3)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Email</span>
            </div>

            <div
              className={`wrap-input100 validate-input ${formErrors.password ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.password}
            >
              <input className="input100" type="password" name="pass" value={formData.password} onChange={handleInputChange} ref={(el) => (inputRefs.current[4] = el)} onBlur={handleBlur(4)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>
            <div
              className={`wrap-input100 validate-input ${formErrors.confirmPassword ? 'alert-validate' : 'has-valid-input'}`}
              data-validate={formErrors.confirmPassword}
            >
              <input className="input100" type="password" name="confirmpass" value={formData.confirmpassword} onChange={handleInputChange} ref={(el) => (inputRefs.current[5] = el)} onBlur={handleBlur(5)}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Confirm Password</span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Register</button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">or sign in</span>
            </div>
            <div class="login100-form-social flex-c-m" onClick={onSwitch}>
               <span>Already have an Account?</span>  
            </div>
          </form>
  )
}

export default Register
