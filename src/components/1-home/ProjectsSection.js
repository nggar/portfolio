import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../utils/projectData';

const projectVariant = {
    initial: { scale: .9 },
    animate: {
        scale: 1, transition: {
            duration: 1.2, ease: 'easeOut'
        }
    }
}

const blockTextVariant = {
    initial: { x: '5vw', y: '5vw' },
    animate: {
        x: 0, y: 0, transition: {
            duration: 1.5, ease: 'easeOut'
        }
    }
}

const ProjectsSection = () => {
    return (
        <section className='projects-section'>
            <div className="projects">
                {projectData.map( project =>
                    <motion.div key={project.id} className="projects__item"
                        variants={projectVariant} viewport={{ amount: 1, once: true }}
                        initial='initial' whileInView='animate'
                    >
                        <Link to={project.url} className={`projects__link projects__link--${project.id}`}>
                            <motion.div className="projects__block"
                                variants={blockTextVariant}
                            >
                                <span className="projects__info">{project.info}</span>
                                <h2 className="projects__title">{project.title}</h2>
                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection;