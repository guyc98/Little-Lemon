import './Testimonials.css'

function Testimonials () {
    return (
        <section className='testimonials_section'>
            <h2>Testimonials</h2>
            <div className='testimonial_cards'>
                <div className='card'>
                    <img src='stock1.jpg'/>
                    <h3>Jim</h3>
                    <h4>Rating: ★★★★☆</h4>
                    <p>Ut consectetur dolor et eu reprehenderit in amet nisi anim magna mollit.</p>
                </div>
                <div className='card'>
                    <img src='stock3.jpg'/>
                    <h3>Jane</h3>
                    <h4>Rating: ★★★★★</h4>
                    <p>Ut consectetur dolor et eu reprehenderit in amet nisi anim magna mollit.</p>
                </div>
                <div className='card'>
                    <img src='stock2.jpg'/>
                    <h3>Joe</h3>
                    <h4>Rating: ★★★★★</h4>
                    <p>Ut consectetur dolor et eu reprehenderit in amet nisi anim magna mollit.</p>
                </div>
                <div className='card'>
                    <img src='stock4.jpg'/>
                    <h3>Janet</h3>
                    <h4>Rating: ★★★★☆</h4>
                    <p>Ut consectetur dolor et eu reprehenderit in amet nisi anim magna mollit.</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;