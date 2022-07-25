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
    const url = location.pathname;

    useEffect( () => {
        setShowAnim( true );
        setTimeout( () => {
            setShowAnim( false );
        }, 1500 );
    }, [url] );


    return (
        <div className='App'>
            <div className="container">
                <Navbar />
                <AnimatePresence exitBeforeEnter onExitComplete={() => window.scroll( { top: 0 } )}>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/project-detail/:id' element={<ProjectDetails url={url} />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
                <FooterDown />
            </div>
            <AnimatePresence exitBeforeEnter initial={false}>
                {showAnim && <SliderAnim url={url} showAnim={showAnim} />}
            </AnimatePresence>
        </div >
    );
}

export default App;
