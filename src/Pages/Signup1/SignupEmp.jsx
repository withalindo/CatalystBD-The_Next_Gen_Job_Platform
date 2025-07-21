import React from 'react'
import "./SignupEmp.css"
import axios from 'axios';

const SignupEmp = () => {

  // Backend Integration
  const handleEmployeeSignup = (e) => {
    e.preventDefault();

    const formData = {

      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value, // Add confirmPassword field
    };

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:5000/api/signup/employee", formData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.error("Error during employee signup:", err);
        alert("Failed to create employee account.");
      });
  };
  // Backend Integration


  return (
    <div className='signupemp'>
      <div className="mainPart">
        <div className="textZone">
          <h1 className='job'>JOB <span className='market'>MARKET</span></h1>
          <div className="paragraphZone">
            <p>This platform connects job seekers with the right opportunities and helps employers find qualified candidates quickly. Whether you're searching for your next role or hiring top talent, our intelligent matching system streamlines the process. Easy to use, fast, and reliable — it's your all-in-one solution for modern job searching and recruitment.</p>
          </div>
          <div className="buttonZone">
            <button className='signupEmp'>Signup as Employee</button>
            <button className='signupCom'>Signup as Company</button>
          </div>
        </div>

        <div className="formZone">
          <h1 className='header'>Employee Signup</h1>
          <div className="formInput">
            <form onSubmit={handleEmployeeSignup} className='form1'>
              <input name='username' type='text' placeholder='Username' />
              <input name='email' type='email' placeholder='Email' />
              <input name='password' type='password' placeholder='Password' />
              <input name='confirmPassword' type='Password' placeholder='Re-enter Password' />
              <button type='submit'>Create Account</button>
            </form>
          </div>
          <div className="socialsignup">
            <p>Or Register with </p>
            <div className="socialButtons">
              {/* Google Signup Button made some changes for button click action  */}
              <button onClick={() => window.open("http://localhost:5000/auth/google")}>Google</button>
              <button onClick={() => window.open("http://localhost:5000/auth/linkedin")}>Linkedin</button>
            </div>
            <h1>Already Have an Account <span className='special'>Login Here</span></h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignupEmp
