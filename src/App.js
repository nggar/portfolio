import './styles/App.scss';
// import pages
import Navbar from './components/Navbar';
import HomePage from './components/1-home/HomePage';
import FooterDown from './components/FooterDown';

function App() {
    return (
        <div className="App container">
            <Navbar />
            <HomePage />
            {/* <About />
            <ProjectDetail />
            <Contact /> */}
            <FooterDown />
        </div >
    );
}

export default App;
