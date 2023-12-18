import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import "./style.scss"
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='not_found_container'>
      <div className="blur_block">
        <HeadingUI text='404' color='white'/>
        <p>Sorry!Page not found</p>
        <Link to="/" className='go_to_home'>Go Home page</Link>
      </div>

    </div>
  )
}

export default NotFound
