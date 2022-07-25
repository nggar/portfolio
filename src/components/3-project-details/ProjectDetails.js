import { useState, useEffect } from 'react';
import ProjectState from '../utils/ProjectState';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const ProjectDetails = ( { url } ) => {
    const [projects] = useState( ProjectState );
    const [project, setProject] = useState( undefined );

    useEffect( () => {
        const currentProject = projects.filter( ( stateProject ) => stateProject.url === url );
        if ( currentProject[0] ) {
            setProject( currentProject[0] );
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
                </motion.div>
            )
            }
        </>
    )
}

export default ProjectDetails;