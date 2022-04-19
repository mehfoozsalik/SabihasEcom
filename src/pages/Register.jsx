import React from "react"
import { Link } from "react-router-dom"
import Privacyterm from "../components/local/Privacyterm"
import SubscriptionCheck from "../components/local/SubscriptionCheck"
import InputTexts from "../components/local/InputTexts"

function Register(props) {
  return (
    <div className='container'>
      <div className='form'>
        <h1>REGISTER YOUR ACCOUNT</h1>
        <div className='capDiv'>
          <span className='caption center'>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </div>
        <form className='form-container'>
          <div className='doubleinput'>
            <InputTexts
              label='First Name'
              placeholder='Enter Your First Name...'
              hFor='registerEmail'
              type='email'
            />
            <InputTexts
              label='Last Name'
              placeholder='Enter Your Last Name...'
              hFor='registerEmail'
              type='email'
            />
          </div>

          <InputTexts
            label='E-Mail'
            placeholder='Enter Your Email Address...'
            hFor='registerEmail'
            type='email'
          />
          <InputTexts
            label='Username'
            placeholder='Enter Your Username...'
            hFor='registerEmail'
            type='email'
          />

          <div className='doubleinput'>
            <InputTexts
              label='Password'
              placeholder='Enter Your Password...'
              hFor='rePass'
              type='password'
            />
            <InputTexts
              label='Confirm Password'
              placeholder='Confirm Your Password...'
              hFor='rePass'
              type='password'
            />
          </div>
          <SubscriptionCheck />
          <Privacyterm />
          <div className='form-btn'>
            <button className='primaryBtn'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
