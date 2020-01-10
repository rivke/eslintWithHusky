import React from 'react'
import './App.css'

// import ToDolist from './todolist/todlist'
// import GlobalProvider from './Context/global/Provider'
import ActionForm from './ActionForm/Index'
function App () {
  function save () {
    console.log('save')
  }

  function cancel () {
    console.log('cancel')
  }

  const myActions = [
    {
      text: 'save',
      onclick: save(),
      primary: false
    },
    {
      text: 'cancel',
      onclick: cancel(),
      primary: true
    }
  ]

  return (
  //  <GlobalProvider>
  //   <ToDolist>
  //   </ToDolist>
  //  </GlobalProvider>

    <ActionForm actions = {myActions}>
      <div className="inputs">
        <input className="input1" placeholder="Name"></input>
        <input className="input2" placeholder="LastName"></input>
      </div>

    </ActionForm>

  )
}

export default App
