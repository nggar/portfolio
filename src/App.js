// import utils
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/utils/scrollTop';
// import styles
import './styles/App.scss';
// import pages
import Navbar from './components/Navbar';
import HomePage from './components/1-home/HomePage';
import About from './components/2-about/About';
import FooterDown from './components/FooterDown';

function App() {
    const location = useLocation();

    return (
        <div className="App container">
            <Navbar />
            <AnimatePresence>
                <ScrollTop />
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='about' element={<About />} />
                    <Route path='project-detail/:id' />
                    <Route path='contact' element={<About />} />
                </Routes>
            </AnimatePresence>
            <FooterDown />
        </div >
    );
}

export default App;
