import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const Contact = () => {
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
                <form className='form'>
                    <input className='form__input' placeholder='Name' type="text" name='user_name' maxLength='256' required />
                    <input className='form__input' placeholder='Email' type="email" name='user_email' maxLength='256' required />
                    <textarea className='form__input' placeholder='Message' name='user_message' maxLength='5000' required ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact;