// App.js
import React from 'react'
import { useAlert } from 'react-alert'

const ShowAlert = (props) => {
  const alert = useAlert()
    console.log('FUnctionc all propos', props)
  return (
    <div 

      onClick={() => {
        alert.show('Oh look, an alert!')
      }}
    >
      
    </div>
  )
}

export default ShowAlert