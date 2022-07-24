import { useEffect, useState } from 'react';
// import utils
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SliderAnim from './components/utils/SliderAnim';
// import styles
import './styles/App.scss';
// import pages
import Navbar from './components/Navbar';
import HomePage from './components/1-home/HomePage';
import About from './components/2-about/About';
import ProjectDetails from './components/3-project-details/ProjectDetails';
import Contact from './components/4-contact/Contact';
import FooterDown from './components/FooterDown';

function App() {
    const location = useLocation();
    const [showAnim, setShowAnim] = useState( false );

    useEffect( () => {
        setShowAnim( true );
        setTimeout( () => {
            setShowAnim( false );
            window.scroll( {
                top: 0
            } );
        }, 1000 );
    }, [location.pathname] );


    return (
        <div className='App'>
            <div className="container">
                <Navbar />
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/project-detail/:id' element={<ProjectDetails />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
                <FooterDown />
            </div>
            <AnimatePresence exitBeforeEnter>
                {showAnim && <SliderAnim />}
            </AnimatePresence>
        </div >
    );
}

export default App;
