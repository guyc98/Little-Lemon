import BookingForm from "../componets/BookingForm";

function BookingPage (props) {
    return (
        <main className="container">
            <section>
                <h1>Reserve a Table</h1>
                <img src="restauranfood.jpg" className="body_image"/>
            </section>
            <BookingForm timesList={props.timesList} changeTimes={props.changeTimes}/>
      </main>
    )
}

export default BookingPage;