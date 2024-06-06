import React from 'react'
import Navbar from './Navbar'

export default function Header(props) {
  console.log('Header run')
  return (
    <div className='header'>
      <h1>Logo</h1>
      <Navbar {...props} /> 
    </div>
  )
}
