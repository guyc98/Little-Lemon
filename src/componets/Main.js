function Main () {
    return (
        <main>
            <section>
                <h1>Reserve a Table</h1>
                <img src="restauranfood.jpg" width={"100px"}/>
            </section>
            <form>
                <label for="date">Date</label>
                <input name="date" type="date" id="date"/>

                <label for="time">Time</label>
                <select name="time" id="time">
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
                <group>
                    <label for="one">1</label>
                    <input type="radio" name="numOfGuests" id="one" value="1"/>
                    <label for="two">2</label>
                    <input type="radio" name="numOfGuests" id="two" value="2"/>
                    <label for="three">3</label>
                    <input type="radio" name="numOfGuests" id="three" value="3"/>
                    <label for="four">4</label>
                    <input type="radio" name="numOfGuests" id="four" value="4"/>
                    <label for="five">5</label>
                    <input type="radio" name="numOfGuests" id="five" value="5"/>
                    <label for="six">6</label>
                    <input type="radio" name="numOfGuests" id="six" value="6"/>  
                </group>

                <a><button>Book Table</button></a>
            </form>
      </main>
    )
}

export default Main;