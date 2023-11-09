import './Hero.css'

function Hero () {
    return (
        <section className="hero_section">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <img src='restauranfood.jpg'/>
        </section>
    )
}

export default Hero;