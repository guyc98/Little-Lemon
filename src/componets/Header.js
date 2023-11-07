import Nav from "./Nav";

function Header () {
    return (
        <header className="container">
            <img src="hamburger menu.svg" className="hamburger_menu"/>
            <img src="Logo.svg" alt="logo" className="header_logo"/>
            <Nav />
        </header>
    )
}

export default Header;