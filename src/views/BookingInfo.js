import Footer from "../componets/Footer";
import Nav from "../componets/Nav";
import './BookingInfo.css'

function BookingInfo () {
    return (
        <main className="container cus_info">
            <h1>Customer & Payment Info</h1>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="First Name..." id="firstName"/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Last Name..." id="lastName"/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email..." id="email"/>
                <div className="line"></div>
                <label htmlFor="cardName">Cardholder's Name</label>
                <input type="text" placeholder="Cardholder's Name..." id="cardName"/>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="number" placeholder="Card Number..." id="cardNumber"/>
                <div className="section">
                    <div className="ex_cvv">
                        <label htmlFor="expiry">Expiry Date</label>
                        <input type="number" placeholder="Expiry Date..." id="expiry"/>
                    </div>
                    <div className="ex_cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" placeholder="CVV..." id="cvv"/>
                    </div>
                </div>
                <div className="price">
                    <h5>Booking Fee</h5>
                    <h6>$5.00</h6>
                </div>
                <button>Confirm Booking</button>
            </form>
        </main>
    )
}

export default BookingInfo;