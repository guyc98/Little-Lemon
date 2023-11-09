import './Specials.css'

function Specials () {
    return (
        <section className='specials_section'>
            <h1>This Weeks Specials</h1>
            <button>Online Menu</button>
            <div className='special_cards'>
                <div className='card'>
                    <img src='greek salad.jpg' className='special_photo'/>
                    <h3>Greek Salad</h3>
                    <h4>$12.99</h4>
                    <p className='description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p className='delivery'>Order a delivery</p>
                    <img src='deliveryicon.jpg' className='delivery_icon'/>
                </div>
                <div className='card'>
                    <img src='bruschetta.jpg' className='special_photo'/>
                    <h3>Bruschetta</h3>
                    <h4>$12.99</h4>
                    <p className='description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p className='delivery'>Order a delivery</p>
                    <img src='deliveryicon.jpg' className='delivery_icon'/>
                </div>
                <div className='card'>
                    <img src='lemon dessert.jpg' className='special_photo'/>
                    <h3>Lemon Dessert</h3>
                    <h4>$12.99</h4>
                    <p className='description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className='delivery'>Order a delivery</p>
                    <img src='deliveryicon.jpg' className='delivery_icon'/>
                </div>
            </div>
        </section>
    )
}

export default Specials;