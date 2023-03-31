import React from 'react'
import '../styles/login.scss'
import build1 from '../images/build-1.jpg'
import { Link } from 'react-router-dom'

const Login = () => {

  


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
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                {/* <div className="text"><a href="#">Forgot password?</a></div> */}
                <div className='btn'>
                  <button type='submit'>Login</button>
                </div>
                <div className="text sign-up-text">
                  Don't have an account?
                  {/* <a href="signup.html">Sigup now</a> */}
                  <Link to='/register' className='link'> Signup Now!</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login
