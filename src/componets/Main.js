function Main () {
    return (
        <main>
            <section>
                <h1>Reserve a Table</h1>
                <img src="restauranfood.jpg" width={"100px"}/>
            </section>
            <form>
                <label htmlFor="date" className="date">Date</label>
                <input name="date" type="date" id="date"/>

                <div className="line"></div>

                <label htmlFor="time" className="time">Time</label>
                <select name="time" id="time" defaultValue="select">
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

                <fieldset id="guests">
                    <legend>Number of Guests</legend>
                    <input type="radio" name="numOfGuests" id="one" value="1"/>
                    <label htmlFor="one">1</label>
                    <input type="radio" name="numOfGuests" id="two" value="2"/>
                    <label htmlFor="two">2</label>
                    <input type="radio" name="numOfGuests" id="three" value="3"/>
                    <label htmlFor="three">3</label>
                    <input type="radio" name="numOfGuests" id="four" value="4"/>
                    <label htmlFor="four">4</label>
                    <input type="radio" name="numOfGuests" id="five" value="5"/>
                    <label htmlFor="five">5</label>
                    <input type="radio" name="numOfGuests" id="six" value="6"/>  
                    <label htmlFor="six">6</label>
                </fieldset>

                <a><button id="bookTable">Book Table</button></a>
            </form>
      </main>
    )
}

export default Main;