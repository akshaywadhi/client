import React from 'react'
import logo from '../assets/group.png'

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">
  <img src={logo} />
    </a>
 
   
     
      <div className='mx-auto'>
        <h3 className='text-white'>Mini Job Board</h3>
      </div>
   
  </div>
</nav>

  )
}
