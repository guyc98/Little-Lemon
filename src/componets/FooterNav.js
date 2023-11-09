import { Link } from "react-router-dom";

function FooterNav () {
    return (
        <>
            <section>
                <h6>Navigation</h6>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li>Login</li>
                </ul>
            </section>
            <section>
                <h6>Contact</h6>
                <ul>
                    <li>100 Fake Lane, Fake ON, A1B 2C3</li>
                    <li>(123)456-7890</li>
                    <li>johndoe@example.com</li>
                </ul>
            </section>
            <section>
                <h6>Social Media</h6>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </section>
        </>
    )
}

export default FooterNav;