import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useTransform, useScroll } from 'framer-motion';

const ProjectsSection = () => {
    const { pathname } = useLocation();
    // useRef for each project
    const project1 = useRef( null );
    const project2 = useRef( null );
    const project3 = useRef( null );
    const project4 = useRef( null );

    // set offset value
    const [offsetStart1, setOffsetStart1] = useState( null );
    const [offsetStart2, setOffsetStart2] = useState( null );
    const [offsetStart3, setOffsetStart3] = useState( null );
    const [offsetStart4, setOffsetStart4] = useState( null );
    // get distance from element top to window top
    useEffect( () => {
        setOffsetStart1( project1.current.getBoundingClientRect().top - 75 );
        setOffsetStart2( project2.current.getBoundingClientRect().top - 80 );
        setOffsetStart3( project3.current.getBoundingClientRect().top - 80 );
        setOffsetStart4( project4.current.getBoundingClientRect().top - 80 );
    }, [pathname] );

    const { scrollY } = useScroll();
    //project-1
    const scale1 = useTransform( scrollY, [0, offsetStart1], [.87, 1] );
    const move1 = useTransform( scrollY, [0, offsetStart1], ['5vw', '0vw'] );
    //project-2
    const scale2 = useTransform( scrollY, [offsetStart1, offsetStart2], [.87, 1] );
    const move2 = useTransform( scrollY, [offsetStart1, offsetStart2], ['5vw', '0vw'] );
    //project-3
    const scale3 = useTransform( scrollY, [offsetStart2, offsetStart3], [.87, 1] );
    const move3 = useTransform( scrollY, [offsetStart2, offsetStart3], ['5vw', '0vw'] );
    //project-4
    const scale4 = useTransform( scrollY, [offsetStart3, offsetStart4], [.87, 1] );
    const move4 = useTransform( scrollY, [offsetStart3, offsetStart4], ['5vw', '0vw'] );

    return (
        <section className='projects-section'>
            <div className="projects">
                {/* Project 1 */}
                <motion.div ref={project1} style={{ scale: scale1 }} className="projects__item">
                    <Link to='project-1' className='projects__link projects__link--0'>
                        <motion.div style={{ x: move1, y: move1 }} className="projects__block">
                            <span className="projects__info">Graphic Design</span>
                            <h2 className="projects__title">Design for one of the major figures of fashion</h2>
                        </motion.div>
                    </Link>
                </motion.div>
                {/* Project 2 */}
                <motion.div ref={project2} style={{ scale: scale2 }} className="projects__item">
                    <Link to='project-2' className='projects__link projects__link--1'>
                        <motion.div style={{ x: move2, y: move2 }} className="projects__block">
                            <span className="projects__info">Advertising</span>
                            <h2 className="projects__title">Visual concept for improving the user experience</h2>
                        </motion.div>
                    </Link>
                </motion.div>
                {/* Project 3 */}
                <motion.div ref={project3} style={{ scale: scale3 }} className="projects__item">
                    <Link to='project-3' className='projects__link projects__link--2'>
                        <motion.div style={{ x: move3, y: move3 }} className="projects__block">
                            <span className="projects__info">Visual Identity</span>
                            <h2 className="projects__title">A new brand for new strategy</h2>
                        </motion.div>
                    </Link>
                </motion.div>
                {/* Project 4 */}
                <motion.div ref={project4} style={{ scale: scale4 }} className="projects__item">
                    <Link to='project-4' className='projects__link projects__link--3'>
                        <motion.div style={{ x: move4, y: move4 }} className="projects__block">
                            <span className="projects__info">Brand & Digital</span>
                            <h2 className="projects__title">Designing a website for innovative projects</h2>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectsSection;