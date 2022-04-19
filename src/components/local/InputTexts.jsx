import React from "react"

function InputTexts(props) {
  return (
    <div className='inputField'>
      <label htmlFor={props.hFor}>
        <h3>{props.label}</h3>
      </label>
      <input
        type={props.type}
        name={props.hFor}
        id={props.hFor}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputTexts
