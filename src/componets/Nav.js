import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link>Login</Link></li>
            </ul>
            <button className="order_online">Order Online</button>
            <img src="Basket.svg" className="basket_icon"/>
        </nav>
    )
}

export default Nav;