import React from 'react';
import React, { Suspense } from 'react';
import Header from './components/Header';
import About from './components/About';
import './index.css';
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

export default function App() {
    return (
        <div className="app-root">
            <Header />
            <main>
                <About />
                <Suspense fallback={<div className="container">Loading projects...</div>}>
                    <Projects />
                    <Contact />
                </Suspense>
            </main>
            <footer className="footer">© 2026 Nandhini | React Portfolio</footer>
        </div>
    );
}
