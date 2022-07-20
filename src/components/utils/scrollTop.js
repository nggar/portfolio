import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    useEffect( () => {
        window.scroll( {
            top: 0,
            left: 0
        } );
    } )
}

export default ScrollTop;