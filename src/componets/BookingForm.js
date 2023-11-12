import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BookingInfo from "../views/BookingInfo";
import Button from "./Button";
import { BookingContext } from "../BookingFormContext";

function BookingForm () {
    const {state, dispatch} = useContext(BookingContext)

    return (
        <form>
            <label htmlFor="date" className="date_label">Date</label>
            <input placeholder="Select A Date" data-testid="date" name="date" type="date" id="date" className="date" onChange={(e) => dispatch({type: e.target.valueAsDate.getDay()})}/>

            <div className="line"></div>

            <label htmlFor="time" className="time_label">Time</label>
            <select name="time" id="time" defaultValue="select" className="time">
                <option value="select" disabled hidden>Select A Time</option>
                {state.map((time) => <option data-testid={time} key={time} value={time}>{time}</option>)}
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
            <div className="line"></div>
            <label htmlFor="occasion" className="occasion_label">Occasion</label>
            <select id="occasion" className="occasion" defaultValue="select">
            <option value="select" disabled hidden>Select An Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <Link to='/booking'><button id="book_table">Book Table</button></Link>
        </form>
    )
}

export default BookingForm;