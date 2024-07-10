import logo from '../public/logo.jpg'
import '../styles/main.scss'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" style={{ height: '100px', width: '100px' }} />
    </div>
  )
}

export default Logo
