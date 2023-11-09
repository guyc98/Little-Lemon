import { Link } from "react-router-dom";

function Reservations () {
    return (
        <main className="container">
            <section>
                <h1>Reserve a Table</h1>
                <img src="restauranfood.jpg" className="body_image"/>
            </section>
            <form>
                <label htmlFor="date" className="date_label">Date</label>
                <input name="date" type="date" id="date" className="date"/>

                <div className="line"></div>

                <label htmlFor="time" className="time_label">Time</label>
                <select name="time" id="time" defaultValue="select" className="time">
                    <option value="select" disabled hidden>Select A Time</option>
                    <option value="500pm">5:00pm</option>
                    <option value="530pm">5:30pm</option>
                    <option value="600pm">6:00pm</option>
                    <option value="630pm">6:30pm</option>
                    <option value="700pm">7:00pm</option>
                    <option value="730pm">7:30pm</option>
                    <option value="800pm">8:00pm</option>
                    <option value="830pm">8:30pm</option>
                    <option value="900pm">9:00pm</option>
                    <option value="930pm">9:30pm</option>
                    <option value="1000pm">10:00pm</option>
                    <option value="1030pm">10:30pm</option>
                </select>

                <div className="line"></div>
                <section>
                    <fieldset className="num_of_guests">
                        <legend>Number of Guests</legend>
                        <input type="radio" name="numOfGuests" id="one" value="1"/>
                        <label htmlFor="one" className="guest_labels">1</label>
                        <input type="radio" name="numOfGuests" id="two" value="2"/>
                        <label htmlFor="two" className="guest_labels">2</label>
                        <input type="radio" name="numOfGuests" id="three" value="3"/>
                        <label htmlFor="three" className="guest_labels">3</label>
                        <input type="radio" name="numOfGuests" id="four" value="4"/>
                        <label htmlFor="four" className="guest_labels">4</label>
                        <input type="radio" name="numOfGuests" id="five" value="5"/>
                        <label htmlFor="five" className="guest_labels">5</label>
                        <input type="radio" name="numOfGuests" id="six" value="6"/>  
                        <label htmlFor="six" className="guest_labels">6</label>
                    </fieldset>
                </section>
                <Link to='/booking'><button id="book_table">Book Table</button></Link>
            </form>
      </main>
    )
}

export default Reservations;