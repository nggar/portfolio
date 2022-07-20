import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="inner-navbar">
                <Link to='/'>
                    <div className="logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="nav">
                    <div className="nav-menu">
                        <Link to='about' className="link nav-link">About</Link>
                        <Link to='contact' className="link nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;