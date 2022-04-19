import React from "react"

import Privacyterm from "../../local/Privacyterm"

function NewsLetter(props) {
  return (
    <div className='newletter-div'>
      <p>
        Stay up to date with news and promotions by signing up for our
        newsletter
      </p>
      <form onSubmit='submit' className='input-footer-letter'>
        <input
          required='true'
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email here...'
        />
        <button type='submit' className='btn-subs'>
          subscribe
        </button>
      </form>
      <Privacyterm />
    </div>
  )
}

export default NewsLetter
