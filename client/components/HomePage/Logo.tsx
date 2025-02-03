import logo from '../public/logo.jpg'
import '../main.scss'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
        />
      </div>
    </Link>
  )
}

export default Logo
