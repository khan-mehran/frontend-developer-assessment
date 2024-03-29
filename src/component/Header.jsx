import React, { useState } from 'react';

const Header =()=> {
    const [activeLink, setActiveLink] = useState('home');

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">Front-End Developer Assessment</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                <a className="nav-link" href="#home" onClick={() => { handleScrollTo('home'); handleSetActiveLink('home'); }}>Home</a>
                            </li>
                            <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                                <a className="nav-link" href="#about" onClick={() => { handleScrollTo('about'); handleSetActiveLink('about'); }}>About</a>
                            </li>
                            <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                                <a className="nav-link" href="#contact" onClick={() => { handleScrollTo('contact'); handleSetActiveLink('contact'); }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
