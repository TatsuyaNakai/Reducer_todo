import React from 'react'
import { Form } from './Form';

export const FormBlock = (props) => {
  return (
    <>
      <Form 
        labelTitle="タイトル"
        value={props.titleValue}
        handleChange={props.changeTitle}
      />
      <Form 
        labelTitle="ボディー"
        value={props.bodyValue}
        handleChange={props.changeBody}
      />
    </>
  )
}
