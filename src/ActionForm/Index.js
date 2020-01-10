import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Index.css'

function ActionsForm ({ actions, children }) {
  const formRef = useRef()

  useEffect(() => {
    const input = formRef.current.querySelector('input')
    input.focus()
  }, [])

  return (
    <form className="form" ref={formRef}>
      <div className="childrenInputs">
        {children}
      </div>
      {
        actions.map((action, i) => {
          return (

            <button className={action.primary ? 'button1' : 'button2'} onClick={action.onclick} key={i}>{action.text}</button>
          )
        }
        )
      }

    </form>
  )
}
ActionsForm.propTypes = {
  actions: PropTypes.array,
  children: PropTypes.array
}
export default ActionsForm
