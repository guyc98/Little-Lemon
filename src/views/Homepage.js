import About from "../componets/About";
import Hero from "../componets/Hero";
import Specials from "../componets/Specials";
import Testimonials from "../componets/Testimonials";

function Homepage () {
    return (
        <main className="container homepage">
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}

export default Homepage;