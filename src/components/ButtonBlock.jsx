import React from 'react'
import { Button } from './Button'

export const ButtonBlock = (props) => {
  return (
    <>
      <Button 
        className={props.primary}
        handleClick={props.addEvent}
        disabled={props.addEventDisable}
        title={props.addEventTitle}
      />

      <Button 
        className={props.danger}
        handleClick={props.deleteAllEvent}
        disabled={props.deleteEventDisabled}
        title={props.deleteTitle}
      />

      <Button 
        className={props.danger}
        title={props.deleteLogTitle}
      />
    </>
  )
}
