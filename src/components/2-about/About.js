import portrait from '../../images/img-portrait.jpg'
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const About = () => {
    return (
        <motion.div className="about"
            variants={pageTransition} initial='initial' animate='animate' exit='exit'
        >
            <section className="section-top">
                <div className="portrait-block">
                    <img src={portrait} alt="portrait" className="portrait" />
                    <h1 className="heading-portrait">Enggar</h1>
                </div>
            </section>
            <section className="section-content">
                <div className="grid-subcategory">
                    <span className="text-subcategory">
                        About
                    </span>
                    <div className="content-subcategory">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque? Rerum quis soluta voluptatem reprehenderit recusandae doloribus, maiores unde? Deleniti illo quaerat nulla, sapiente beatae ea nobis id totam rem repudiandae. Dolores ratione eos molestias laborum dignissimos provident. Facilis, veritatis</p>
                    </div>
                    <span className="text-subcategory">
                        Skills
                    </span>
                    <div className="content-subcategory">
                        <div className="skills">
                            <div className="skill">
                                <li>HTML/CSS</li>
                                <li>Javascript</li>
                                <li>Sass</li>
                            </div>
                            <div className="skill">
                                <li>React JS</li>
                                <li>Next JS</li>
                                <li>Typescript</li>
                            </div>
                            <div className="skill">
                                <li>Tailwind</li>
                                <li>Framer Motion</li>
                                <li>Node/Express JS</li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default About;