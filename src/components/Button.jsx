import React from 'react'

export const Button = (props) => {

  return (
    <>
      <button 
        className={props.className}
        onClick={props.handleClick}
        disabled={props.disabled}
        >
        {props.title}
      </button>
    </>
  )
}