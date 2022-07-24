import { motion } from 'framer-motion';
import { sliderTransition, logoTransition } from './animations';

const SliderAnim = () => {

    return (
        <motion.div className='transition'
            variants={sliderTransition}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <div>
                <motion.h4 variants={logoTransition}>Enggar</motion.h4>
            </div>
        </motion.div>
    )
}

export default SliderAnim;