import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <div className="success-message">
            <p>Your message has been submitted.
                <br />
                I will get back to you soon.
                <br />
                Thank You.
            </p>
        </div>
    )
}

const Contact = () => {
    const form = useRef();
    const [result, setResult] = useState( false );
    const [submitting, setSubmitting] = useState( false );

    const sendEmail = async ( e ) => {
        e.preventDefault();

        setSubmitting( true );

        await emailjs.sendForm( 'service_4kwmi31', 'template_sz4de1q', form.current, '_A_M4as32LP1v_Pkp' )
            .then( ( result ) => {
                console.log( result.text );
            }, ( error ) => {
                console.log( error.text );
            } );
        e.target.reset();
        setResult( true );
        setTimeout( () => {
            setResult( false );
            setSubmitting( false );
        }, 8000 );
    };
    return (
        <motion.section className="contact"
            variants={pageTransition}
            initial="initial"
            animate='animate'
            exit='exit'
        >
            <div className="inner-block">
                <h1 className="title">
                    Fill out the form or just email me at <a href='mailto:jihandokoenggar@gmail.com' className='heading-link'>jihandokoenggar@gmail.com</a>
                </h1>
            </div>

            <div className="form-block">
                {result ? <Result /> :
                    <form ref={form} onSubmit={sendEmail} className='form'>
                        <input className='form__input' placeholder='Name' type="text" name='user_name' maxLength='256' required />
                        <input className='form__input' placeholder='Email' type="email" name='user_email' maxLength='256' required />
                        <textarea className='form__input' placeholder='Message' name='user_message' maxLength='5000' required ></textarea>
                        <button type='submit'>{submitting ? 'Please wait...' : 'Submit'}</button>
                    </form>}
            </div>
        </motion.section>
    )
}

export default Contact;