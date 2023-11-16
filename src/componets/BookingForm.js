import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../mockAPI";

function BookingForm (props) {
    const todaysDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    const navigate = useNavigate()

    const [data, setData] = useState()

    const [errors, setErrors] = useState({
        date: 'Required',
        time: 'Required',
        guests: 'Required',
        occasion: 'Required',
    })

    const [formDate, setFormDate] = useState({
        value: '',
        touched: false,
        valid: false,
    })

    const validateDate = () => {
        if (formDate.value === '') {
            setErrors(prevState => {
                return {...prevState, date: "Required"}
            })
        } else {
            setErrors(prevState => {
                return {...prevState, occasion: ''}
            })
        }
    }

    const [formTime, setFormTime] = useState({
        value: '',
        touched: false,
        valid: false,
    })

    const validateTime = () => {
        if (formTime.value === '') {
            setErrors(prevState => {
                return {...prevState, time: "Required"}
            })
        }
    }

    const [formGuests, setFormGuests] = useState({
        value: '',
        touched: false,
        valid: false,
    })

    const validateGuests = () => {
        if (formGuests.value === '') {
            setErrors(prevState => {
                return {...prevState, guests: "Required"}
            })
        }
    }

    const [formOccasion, setFormOccasion] = useState({
        value: '',
        touched: false,
        valid: false,
    })

    const validateOccasion = () => {
        if (formOccasion.value === '') {
            setErrors(prevState => {
                return {...prevState, occasion: "Required"}
            })
        } else {
            setErrors(prevState => {
                return {...prevState, occasion: ''}
            })
        }
    }
    
    useEffect(() => {
        fetchAPI(formDate.value).then(response => setData(response)).catch(err => console.log(err))
        }, [formDate])

    const RadioChange = (e) => {
        setFormGuests(prevState => {
            return {...prevState, value: e.target.value, valid: true}
        })
        validateGuests()
    }

     const handleSubmit = (e) => {
        e.preventDefault()
        submitAPI(formDate, formTime)
            .then(response => response && navigate("/confirmedbooking"))
    }

    const enabledButton = formDate.value !== '' && formTime.value !== '' && formTime.touched && formGuests !== '' && formOccasion !== '' && formOccasion.touched

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date" className="date_label">Date *</label>
            <input id="date" aria-label="On Click" type="date" data-testid="date" name="date" className="date" value={formDate.value}
                onChange={(e) => {
                    setFormDate(prevState => {
                        return {...prevState, value: e.target.value, valid: true}
                    })
                }}
                onBlur={() => {
                    setFormDate(prevState => {
                        return {...prevState, touched: true}
                    })
                    validateDate()
                }}
                style={{backgroundColor: formDate.valid && "#495E57", color: formDate.valid && "white", border: formDate.touched === true && formDate.valid === false && "3px solid red"}}
                />
            <div data-testid="date_error" className="error" hidden={formDate.touched === true && formDate.valid === false ? false : true}>{errors.date}</div>

            <div className="line"></div>

            <label htmlFor="time" className="time_label">Time *</label>
            <select aria-label="On Click" name="time" data-testid="time" id="time" className="time" value={formTime.value}
                onChange={(e) => {
                    setFormTime((prevState) => {
                        return {...prevState, value: e.target.value, valid: true}
                    })
                }}
                onBlur={() => {
                    setFormTime(prevState => {
                        return {...prevState, touched: true}
                    })
                    validateTime()
                }}
                style={{backgroundColor: formTime.valid && "#495E57", color: formTime.valid && "white", border: formTime.touched === true && formTime.valid === false && "3px solid red"}}
                >
                <option value="" name="select" hidden disabled>Select A Time</option>
                {data?.map((time) => <option name={time} key={time} value={time}>{time}</option>)}
            </select>
            <div data-testid="time_error" className="error" hidden={formTime.touched === true && formTime.valid === false ? false : true}>{errors.time}</div>

            <div className="line"></div>

            <section>
                <fieldset className="num_of_guests">
                    <legend>Number of Guests *</legend>
                    <input aria-label="On Click" type="radio" name="numOfGuests" id="one" value="1" checked={formGuests.value === "1"} onClick={RadioChange}/>
                    <label htmlFor="one" className="guest_labels">1</label>
                    <input aria-label="On Click" type="radio" data-testid="guests" name="numOfGuests" id="two" value="2" checked={formGuests.value === "2"} onClick={RadioChange}/>
                    <label htmlFor="two" className="guest_labels">2</label>
                    <input aria-label="On Click" type="radio" name="numOfGuests" id="three" value="3" checked={formGuests.value === "3"} onClick={RadioChange}/>
                    <label htmlFor="three" className="guest_labels">3</label>
                    <input aria-label="On Click" type="radio" name="numOfGuests" id="four" value="4" checked={formGuests.value === "4"} onClick={RadioChange}/>
                    <label htmlFor="four" className="guest_labels">4</label>
                    <input aria-label="On Click" type="radio" name="numOfGuests" id="five" value="5" checked={formGuests.value === "5"} onClick={RadioChange}/>
                    <label htmlFor="five" className="guest_labels">5</label>
                    <input aria-label="On Click" type="radio" name="numOfGuests" id="six" value="6" checked={formGuests.value === "6"} onClick={RadioChange}/>
                    <label htmlFor="six" className="guest_labels">6</label>
                </fieldset>
            </section>
            {formGuests.touched === true && formGuests.valid === false && <div className="error">{errors.guests}</div>}

            <div className="line"></div>

            <label htmlFor="occasion" className="occasion_label">Occasion *</label>
            <select aria-label="On Click" name="occasion" data-testid="occasion" id="occasion" className="occasion" value={formOccasion.value}
                onChange={(e) => {
                    setFormOccasion((prevState) => {
                        return {...prevState, value: e.target.value, valid: true}
                    })
                }}
                onBlur={() => {
                    setFormOccasion(prevState => {
                        return {...prevState, touched: true}
                    })
                    validateOccasion()
                }}
                style={{backgroundColor: formOccasion.valid && "#495E57", color: formOccasion.valid && "white", border: formOccasion.touched === true && formOccasion.valid === false && "3px solid red"}}
                >
                <option value="" name="" hidden disabled>Select An Occasion</option>
                <option value="none" name="none">None</option>
                <option value="birthday" name="birthday">Birthday</option>
                <option value="anniversary" name="anniversary">Anniversary</option>
            </select>
            <div data-testid="occasion_error" className="error" hidden={formOccasion.touched === true && formOccasion.valid === false ? false : true}>{errors.occasion}</div>

            <button type="submit" style={{backgroundColor: enabledButton !== false && "#F4CE14"}} aria-label="On Click" data-testid="button" id="book_table" disabled={!enabledButton}>Book Table</button>
        </form>
        )
}

export default BookingForm;