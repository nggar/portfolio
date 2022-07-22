import { Link } from 'react-router-dom';

const ContactSection = () => {
    return (
        <section className='contact-section'>
            <div className="contact">
                <h2 className="contact__heading">Let's make something together, <Link to='contact' className="heading-link">Say hi</Link>.</h2>
                <div className="socials">
                    <a href="github.com/nggar" className="link socials__link">Github</a>
                    <a href="github.com/nggar" className="link socials__link">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;