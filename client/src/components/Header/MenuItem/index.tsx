import { Link } from 'react-router-dom'

function MenuItem() {
  return (
    <div className='main-menu'>
    <ul className='topmenu'>
        <li><Link to="/customization">Shop</Link></li>
    </ul>
    </div>
  )
}

export default MenuItem