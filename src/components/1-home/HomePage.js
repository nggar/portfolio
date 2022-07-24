import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const HomePage = () => {
    return (
        <motion.div variants={pageTransition} initial='initial' animate='animate' exit='exit'>
            <HeroSection />
            <ProjectsSection />
            <ContactSection />
        </motion.div>
    )
}

export default HomePage;