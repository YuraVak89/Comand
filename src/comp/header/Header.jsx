import {Link} from 'react-router-dom'
import "./style.css"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/burger">
        <div className='header-name'>Shop</div>
      </Link>
      <Link to="/shopcard">
        <div className='header-name'>ShopCart</div>
      </Link>
      <Link to="/history">
        <div className='header-name'>History</div>
      </Link>
    </div>
  )
}

export default Header