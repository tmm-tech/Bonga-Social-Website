/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import '../Authentication/authentication.css'
import '../Authentication/utils.css'
function Register({onSwitch}) {
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
      fullname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      Image:''
    });
    const [formErrors, setFormErrors] = useState({});
  
    const handleInputChange = (evt) => {
      const { name, value } = evt.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleImageSelect = (event) => {
      const selectedImage = event.target.files[0];
      setImage(URL.createObjectURL(selectedImage));
      setFormData((prevData) => ({...prevData, image: selectedImage,}));
    };
    const validatePassword = (password) => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return regex.test(password);
    };
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      const errors = {};
      if (formData.fullname.trim() === "") {
        errors.fullname = "Full Name is required";
      }
      if (formData.username.trim() === "") {
        errors.username = "Username is required";
      }
      if (formData.phonenumber.trim() === "") {
        errors.phonenumber = "Phone Number is required";
      }
      if (formData.email.trim() === "") {
        errors.email = "Email is required";
      }
      if (!validatePassword(formData.password)) {
        errors.password =
          "Password must be at least 8 characters long and contain at least one letter and one number";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        console.log(formData);
        // do form submission here
      }
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
              Create Account ?
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.fullname}
            >
              <input className="input100" type="text" name="fullname" value={formData.fullname} onChange={handleInputChange}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Full Name</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.username}
            >
              <input className="input100" type="text" name="username" value={formData.username} onChange={handleInputChange}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Username</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.phonenumber}
            >
              <input className="input100" type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Phone Number</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.email}
            >
              <input className="input100" type="text" name="email" value={formData.email} onChange={handleInputChange}/>
              <span className="focus-input100"></span>
              <span className="label-input100">Email</span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.password}
            >
              <input className="input100" type="password" name="pass" value={formData.password} onChange={handleInputChange} />
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate={formErrors.confirmPassword}
            >
              <input className="input100" type="password" name="confirmpass" value={formData.confirmpassword} onChange={handleInputChange} />
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
