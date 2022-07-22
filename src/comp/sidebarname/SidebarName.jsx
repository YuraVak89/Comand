import { Link } from "react-router-dom"
import "./style.css"

const SidebarName = () => {
  return (
    <>
      <Link to="/burger">
        <div className="shop-name">Eat</div>
      </Link>
      <Link to="/dessert">
        <div className="shop-name">Dessert</div>
      </Link>
      <Link to="/drink">
        <div className="shop-name">Drink</div>
      </Link>
    </>
  )
}

export default SidebarName