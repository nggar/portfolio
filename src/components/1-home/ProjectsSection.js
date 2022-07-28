import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../utils/projectData';

const projectVariant = {
    initial: { scale: .9 },
    animate: {
        scale: 1, transition: {
            duration: .75, ease: [0.77, 0, 0.175, 1],
        }
    }
}

const blockTextVariant = {
    initial: { x: '5vw', y: '5vw' },
    animate: {
        x: '0vw', y: '0vw', transition: {
            duration: .75, ease: [0.77, 0, 0.175, 1]
        }
    }
}

const linkVariant = {
    initial: {
        y: '100%',
    },
    // target h6
    hover: {
        y: '15%',
        transition: {
            duration: .5, delay: .25
        }
    }
}


const ProjectsSection = () => {

    return (
        <section className='projects-section'>
            <div className="projects">
                {projectData.map( project =>
                    <motion.div key={project.id} className="projects__item"
                        variants={projectVariant}
                        viewport={{ once: true, amount: 1 }}
                        initial='initial'
                        whileInView='animate'
                        whileTap={{ scale: .97 }}
                        whileHover='hover'
                    >
                        <Link to={project.url} className={`projects__link projects__link--${project.id}`}>
                            <motion.div className="projects__block"
                                variants={blockTextVariant}
                            >
                                <span className="projects__info">{project.info}</span>
                                <h2 className="projects__title">{project.title}</h2>
                            </motion.div>
                            <motion.div className="link-wrapper">
                                <motion.h6
                                    variants={linkVariant}
                                >view details</motion.h6>

                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection;