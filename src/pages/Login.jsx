import React from "react"
import { Link } from "react-router-dom"
import InputTexts from "../components/local/InputTexts"

function Login(props) {
  return (
    <div className='container'>
      <div className='form'>
        <h1>Account Login</h1>
        <form className='form-container'>
          <InputTexts
            label='E-Mail or Username'
            placeholder='Enter your email here...'
            hFor='loginEmail'
            type='email'
          />
          <InputTexts
            label='Password'
            placeholder='Enter your password here...'
            hFor='emailPas'
            type='password'
          />
          <div className='capDiv'>
            <span className='caption end'>
              forgot your password? <Link to=''>Click here!</Link>
            </span>
          </div>
          <div className='form-btn'>
            <button className='primaryBtn'>Login</button>
          </div>
          <div className='capDiv'>
            <span className='caption center'>
              Still dont have an account?{" "}
              <Link to='/register'>Create an account!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
