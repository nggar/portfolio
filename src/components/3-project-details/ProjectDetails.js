import { useState, useEffect } from 'react';
import ProjectState from '../utils/ProjectState';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import { Link } from 'react-router-dom';

const headingVariants = {
    animate: {
        color: '#a9a9a9',
        transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

const circleVariants = {
    animate: {
        rotate: '-45deg', color: '#a9a9a9', borderColor: '#a9a9a9',
        transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

const imgVariants = {
    initial: {
        opacity: 0, scale: .5
    },
    animate: {
        opacity: 1, scale: 1.2, transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

const ProjectDetails = ( { url } ) => {
    const [projects] = useState( ProjectState );
    const [project, setProject] = useState( undefined );

    useEffect( () => {
        const currentProject = projects.filter( ( project ) => project.url === url );
        if ( currentProject[0] ) {
            setProject( currentProject[0] )
        }
    }, [url, projects] );

    return (
        <>
            {project && (
                <motion.div className="project"
                    variants={pageTransition}
                    initial="initial"
                    animate='animate'
                    exit='exit'
                >
                    {/* section top */}
                    <section className="section-top">
                        <span className="project__info">{project.info}</span>
                        <h1 className="project__heading">{project.title}</h1>
                        <div className="project__links">
                            <div className="project__links__block">
                                <span className="link-info">Code</span>
                                <a href={project.code} target='_blank' rel="noreferrer" className='project-link'>
                                    <h5 className="heading-link">Github</h5>
                                </a>
                            </div>
                            <div className="project__links__block">
                                <span className="link-info">Live demo</span>
                                <a href={project.liveSite} target='_blank' rel="noreferrer" className='project-link'>
                                    <h5 className='heading-link'>Website</h5>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* main image */}
                    <div className="main-img-wrapper">
                        <div style={{ backgroundImage: `url('${project.imgTop}')` }} className="main-img"></div>
                    </div>

                    {/* section description */}
                    <section className="section-bottom">
                        <div className="project__description">
                            <div className="project-about">
                                <h3>About the project</h3>
                                {project.about}
                            </div>
                            <div className="project-techs">
                                <h5>Technology</h5>
                                {project.techs}
                            </div>
                            <div className="project-functionality">
                                <h5>Functionality</h5>
                                {project.functions}
                            </div>
                            <div className="project-small-img">
                                <img src={project.imgBottom} alt="project preview" />
                            </div>
                            <div className="project-conclution">
                                <h3>Conclutions</h3>
                                {project.conclution}
                            </div>
                        </div>
                    </section>

                    {/* other projects */}
                    <section className="other-projects">
                        {projects.map( ( project ) =>
                            <div to={project.url} className={`link-project ${project.url === url ? 'display-none' : ''}`} key={project.id}>
                                <motion.div className="heading-wrapper"
                                    initial='initial'
                                    whileHover='animate'
                                >
                                    <Link to={project.url}>
                                        <motion.h3
                                            variants={headingVariants}
                                        >{project.title}</motion.h3>
                                        <motion.div className="link-circle"
                                            variants={circleVariants}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                            <div className="background-circle"></div>
                                        </motion.div>
                                        <motion.img src={project.imgBottom} alt='other projects'
                                            variants={imgVariants}
                                        />
                                    </Link>
                                </motion.div>
                            </div>
                        )}
                    </section>
                </motion.div>
            )
            }
        </>
    )
}

export default ProjectDetails;