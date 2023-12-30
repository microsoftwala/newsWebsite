import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [search,setSearch] = useState("")

  function handleSearch(){
    localStorage.setItem('token',JSON.stringify(search))
  }
  return (
      <div >
      <nav className="navbar ">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li className='mt-2'>
              <Link className="font-serif" to="/news">Home</Link>
            </li>
            <li className='mt-2'>
              <Link className="font-serif">Signout</Link>
            </li>
            <li className='flex'>
              <input className="p-2" type='text' placeholder='Search' onChange={(event) =>
            setSearch((prev) => ({ ...prev, search: event.target.value}))}></input>
              <button className='p-3 ml-3' onClick={handleSearch}>Search</button>
            </li>
          </ul>
          <h1 className="logo font-bold font-serif hover:text-emerald-500 hover:cursor-pointer hover-gradient">
            Navbar
          </h1>
        </div>
      </nav>
      
    </div>
  )
}

export default Nav