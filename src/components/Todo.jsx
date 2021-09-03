import React, {useState, useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers/index'
import {Events} from '../components/Events'
import { FormBlock } from './FormBlock'
import { ButtonBlock } from './ButtonBlock'
import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS} from '../actions.js'
import {AppContext} from '../contexts/AppContext'

export const Todo = () => {
  const [title, setTitle]= useState('');
  const [body, setBody]= useState('');
  const [state, dispatch]= useReducer(reducer, []);

  const addEvent=(e)=>{
    e.preventDefault();
    // ボタン自体が持ってる効果を無効化してくれる機能がある。
    dispatch({
      type: CREATE_EVENT,
      title: title,
      body: body,
    })
    setTitle('');
    setBody('');
  }

  const deleteEvent=(id)=>{
    const result=window.confirm(`イベント(id=${id})を削除しますか`);
    if (result){
      dispatch({
        type: DELETE_EVENT,
        id
      })
    }else{
      return
    }
  }

  const deleteAllEvent=(e)=>{
    e.preventDefault()
    const result=window.confirm('本当に削除しますか？')
    if(result){
      dispatch({
        type: DELETE_ALL_EVENTS
      })
    }else{
      return 
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <FormBlock 
            titleValue={title}
            bodyValue={body}
            changeTitle={(e)=>setTitle(e.target.value)}
            changeBody={(e)=>setBody(e.target.value)}
          />

          <ButtonBlock 
            primary='btn btn-primary'
            addEvent={addEvent}
            addEventDisable={title === '' || body ===''}
            addEventTitle="イベントを作成する"

            danger='btn btn-danger'
            deleteAllEvent={deleteAllEvent}
            deleteEventDisabled={state.length === 0}
            deleteTitle="全てのイベントを削除する"

            deleteLogTitle="全てのログを削除する"
          />
          <AppContext.Provider value={deleteEvent}>
            {/* これvalueじゃないと流せない。 */}
            <Events 
              state={state}
            />
          </AppContext.Provider>

        </form>
      </div>
    </>
  )
}
