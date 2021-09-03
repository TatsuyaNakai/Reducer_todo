import React, {useContext} from 'react'
import { AppContext } from '../contexts/AppContext'

export const Event = ({event}) => {
const deleteEvent= useContext(AppContext)

  return (
    <>
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button
            type="button" 
            className="btn btn-danger"
            onClick={()=>deleteEvent(event.id)}
            >
            削除
          </button>
        </td>
      </tr>
    </>
  )
}
