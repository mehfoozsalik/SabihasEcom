import React from "react"
import InputTexts from "./InputTexts"
import TextArea from "./TextArea"

function CommentForm(props) {
  return (
    <form className='coment-form' action=''>
      <div className='coment-form-div'>
        <InputTexts
          label='Name'
          placeholder='Enter your name here...'
          hFor='ComName'
          type='text'
        />
        <span className='space'></span>
        <InputTexts
          label='E-Mail'
          placeholder='Enter your email here...'
          hFor='ComEmail'
          type='email'
          rows='3'
        />
      </div>
      <TextArea
        label='Comment'
        placeholder='Enter your comment...'
        hFor='coment'
      />
      <button className='primaryBtn comentfrmbtn'>Submit</button>
    </form>
  )
}

export default CommentForm
