import React from 'react'
import {Event} from './Event'

export const Events = (props) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((event)=>(
            <Event 
              key={event.id}
              event={event}
            />
            )
          )}
        </tbody>
      </table>
    </>
  )
}
