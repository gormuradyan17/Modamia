import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function LoginSignBtn() {
  return (
    <div>
      <ul className='user-menu'>
        <li className='search-icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} /> 
         </li>
        <li className='login_user'>
          <Link to="/login">Login</Link>
        </li>
        <li  className='join_user'>
        <Link to="/join">Join</Link>
        </li>
      </ul>
    </div>
  )
}

export default LoginSignBtn
