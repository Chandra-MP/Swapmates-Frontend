import React, {useState} from 'react'
import '../styles/login.scss'
import build1 from '../images/build-1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const [err, setErr] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {

    setInputs(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8800/api/auth/login", inputs)
      console.log(res.data.token)

      //Setting cookie manually to the document, and Would need to take care of the access_token Manually after logout 
      document.cookie = "access_token =" + res.data.token;

      //navigate to the home page after that
      navigate("/posts")
    }catch(err){
      setErr(err.response.data);
    }
    
  }

  return (
    <div className='loginbodycontainer'>
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
                  <input type="text" placeholder="Enter your username" name='username' value={inputs.username} onChange={handleChange} required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" name='password' value={inputs.password} onChange={handleChange} required />
                </div>
                {/* <div className="text"><a href="#">Forgot password?</a></div> */}
                <div className='btn'>
                  <button type='submit' onClick={handleSubmit}>Login</button>
                </div>
                <span style={{textAlign:"center", gap:"30px", fontSize:"12px"}}>
                {err && <p>{err}</p>}
                </span>
                <div className="text sign-up-text">
                  Don't have an account?
                  <Link to='/register' className='link'> Signup Now!</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Login
