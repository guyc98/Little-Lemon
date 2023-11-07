function Nav () {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <button className="order_online">Order Online</button>
            <img src="Basket.svg" className="basket_icon"/>
        </nav>
    )
}

export default Nav;