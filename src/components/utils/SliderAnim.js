import { motion } from 'framer-motion';
import { sliderTransition, logoTransition } from './animations';
import { useState, useEffect } from 'react';
import { sliderData } from './sliderData';

const SliderAnim = ( { url } ) => {
    const [paths] = useState( sliderData );
    const [path, setPath] = useState( sliderData[0] );

    useEffect( () => {
        const currentPath = paths.filter( ( statePath ) => statePath.url === url );
        if ( currentPath[0] ) {
            setPath( currentPath[0] );
        }
    }, [url, paths] );
    return (
        <motion.div className={`transition transition__background--${path.id}`}
            variants={sliderTransition}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <motion.h2 variants={logoTransition}>{path.name}</motion.h2>
        </motion.div>
    )
}

export default SliderAnim;