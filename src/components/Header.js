import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <header className="site-header">
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src={process.env.PUBLIC_URL + '/images/Nandhini__4_-removebg-preview (1).png'} alt="logo" className="logo" />
                    <h1>Nandhini</h1>
                </div>
                <nav className="nav">
                    <Link to="/">About</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/resume">Resume</Link>
                    <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">
                        {theme === 'light' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </div>
        </header>
    );
}
