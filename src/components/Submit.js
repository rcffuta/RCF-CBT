import React from 'react'
import './Submit.css'

const Submit = () => {
  return (
    <div className='content'>
    <div className='container'>
      <h2>Are you sure you want to Submit?</h2>
      <button className='cancel' id='cancel'>Cancel</button>
      <button className='submit' id='submit'>Submit</button>
    </div>
    </div>
  )
}

export default Submit