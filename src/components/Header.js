import React from 'react';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="brand">
                    <img src={process.env.PUBLIC_URL + '/images/Nandhini__4_-removebg-preview (1).png'} alt="logo" className="logo" />
                    <h1>Nandhini</h1>
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}
