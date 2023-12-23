import { faMagnifyingGlass, faShop, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { isLogged, setIsLogged } from 'redux/reducers/userReducer'
import { userSignout } from 'services/userService'
import { eraseCookie } from 'shared/helpers/helpers'

function LoginSignBtn() {
  const isUserLogged = useSelector(isLogged)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signout = async () => {
    try {
      const data = await userSignout();
      if (data) {
        eraseCookie('accessToken')
        dispatch(setIsLogged(false));
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <ul className='user-menu'>
        <li className='search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
        {!isUserLogged ? <> <li className='login_user'>
          <Link to="/signin">Login</Link>
        </li>
          <li className='join_user'>
            <Link to="/signup">Join</Link>
          </li>
        </> : <div className='user_logged'>
          <li className='user_account'>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
              <span>My Account</span>
            </Link>
          </li>
          <li className='user_logout'>
            <button
              onClick={signout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Sign out</span>
            </button>
          </li>
        </div>}
        <li className='user_cart'>
          <Link to="/shopcart">
            <FontAwesomeIcon icon={faShop} />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LoginSignBtn
