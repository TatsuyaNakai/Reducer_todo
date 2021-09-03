import React from 'react'

export const Form = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="formEventTitle">{props.labelTitle}</label>
        <input 
          className="form-control" 
          id="formEventTitile" 
          value={props.value} 
          onChange={props.handleChange} 
        />
      </div>
    </>
  )
}
