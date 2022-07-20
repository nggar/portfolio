import portrait from '../../images/img-portrait.jpg'

const About = () => {
    return (
        <div className="about">
            <section className="section-top">
                <div className="portrait-block">
                    <img src={portrait} alt="portrait" className="portrait" />
                    <h1 className="heading-portrait">Enggar</h1>
                </div>
            </section>
        </div>
    )
}

export default About;