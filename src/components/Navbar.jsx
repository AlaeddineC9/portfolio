import React, { useState } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id="header" className={`d-flex justify-content-center ${menuOpen ? 'mobile-nav-active' : ''}`}>
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>ACCUEIL</span></a></li>
                    <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>COMPETENCES</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
            {/* <button className="mobile-nav-toggle" onClick={toggleMenu}>
                <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
            </button> */}
        </header>
    );
}

export default Nav;