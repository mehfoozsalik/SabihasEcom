import React from "react"

function TextArea(props) {
  return (
    <div className='inputField'>
      <label htmlFor={props.hFor}>
        <h3>{props.label}</h3>
      </label>
      <textarea
        name={props.hFor}
        id={props.hFor}
        placeholder={props.placeholder}
        rows={props.rows}
      />
    </div>
  )
}

export default TextArea
