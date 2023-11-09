import Nav from "./Nav";
import './Header.css'

function Header () {
    return (
        <header className="container">
            <img src="hamburger menu.svg" className="hamburger_menu"/>
            <img src="logo.png" alt="logo" className="header_logo"/>
            <Nav />
        </header>
    )
}

export default Header;