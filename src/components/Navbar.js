
import logo from '../images/logo.svg';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="inner-navbar">
                <a href="">
                    <div className="logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                </a>
                <div className="nav">
                    <div className="nav-menu">
                        <a href="" className="link nav-link">About</a>
                        <a href="" className="link nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;