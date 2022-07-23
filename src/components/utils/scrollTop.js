import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect( () => {
        window.scroll( {
            top: 0,
            left: 0
        } );
    }, [pathname] );

    return (
        <motion.div></motion.div>
    )
}

export default ScrollTop;