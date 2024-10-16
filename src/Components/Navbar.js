import { useState, useRef } from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoSmall from '../Images/logo-small.webp';
import Hamburger from 'hamburger-react'
import NavOverlay from './NavOverlay';

function Navbar() {
    const navbar = useRef();

    // useEffect(() => {
    //     let lastScrollY = window.scrollY;

    //     const handleScroll = () => {
    //         if (lastScrollY < window.scrollY) {
    //             navbar.current.classList.add("nav-shrink");
    //         } else if (window.scrollY === 0) {
    //             navbar.current.classList.remove("nav-shrink");
    //         }

    //         lastScrollY = window.scrollY;
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="navbar" ref={navbar}>
            <div className="nav-container nav-container-large">
                <img src={LogoSmall} alt="small version of the little lemon logo" width={140} />
                <nav className="nav">
                    <Link to="/" className="nav-item" aria-label="On Click" onClick={scrollToTop}>HOME</Link>
                    <Link to="/about" className="nav-item" aria-label="On Click" onClick={scrollToTop}>ABOUT</Link>
                    <Link to="/menu" className="nav-item" aria-label="On Click" onClick={scrollToTop}>MENU</Link>
                    <Link to="/reservations" className="nav-item" aria-label="On Click" onClick={scrollToTop}>RESERVATIONS</Link>
                    <Link to="/order-online" className="nav-item" aria-label="On Click" onClick={scrollToTop}>ORDER ONLINE</Link>
                    <Link to="/login" className="nav-item" aria-label="On Click" onClick={scrollToTop}>LOGIN</Link>
                </nav>
            </div>
            <NavOverlay isOpen={isOpen} setOpen={setOpen} />
            <div className="nav-container nav-container-small">
              <div>
                <img src={LogoSmall} alt="small version of the little lemon logo" width={140} />
                <Hamburger aria-label="On Click" toggled={isOpen} toggle={setOpen} color="#333333" rounded label="show navbar" />
              </div>
            </div>
        </div>
    );
}

export default Navbar;