import React, { useState, useEffect } from 'react'
import '../styles/login.scss'
import build1 from '../images/build-1.jpg'
import { Link, useNavigate} from 'react-router-dom'

import axios from 'axios'

const Register = () => {

 

  
  const [err, setError] = useState(null)
  const navigate = useNavigate()

 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => setLocation(data.display_name));
          
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const [location, setLocation] = useState("");
  const [inputs, setInputs] = useState({
    name:'',
    email: '',
    username: '',
    password: '',
    location: location
  })


  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(inputs)
      const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
      console.log(res);
    }catch(err){
      setError(err.response.data)
      setTimeout(()=>{
        // navigate("/login")
      }, 2000)
    }
  }


  return (
    <div className="container_login">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src={build1} alt="" />
          <div className="text">
            <span className="text-1">Every new friend is a <br /> new adventure</span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          <img className="backImg" src="/assets/img/build-1.jpg" alt="" />
          <div className="text">
            <span className="text-1">Complete miles of journey <br /> with one step</span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Register</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="First Name" name='name' value={inputs.name} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Email" name='email' value={inputs.email} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Username" name='username' value={inputs.username} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" name='password' value={inputs.password} onChange={handleChange} required />
                </div>
                {/* <div className="text"><a href="#">Forgot password?</a></div> */}
                <div className='btn'>
                  <button type='submit' onClick={handleSubmit}>Register</button>
                </div>
                <div className="text sign-up-text">
                  Already have an account?
                  {/* <a href="signup.html">Sigup now</a> */}
                  <Link to='/login' className='link'> Login Now!</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register