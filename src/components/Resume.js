import React from 'react';

export default function Resume() {
    return (
        <section className="section container" style={{ paddingTop: 20 }}>
            <h2>Resume</h2>
            <p>You can download my resume for recruiter review using the button below.</p>
            <p>
                <a href="/resume.html" download className="btn">Download Resume (HTML)</a>
                <a href="/resume.html" target="_blank" rel="noreferrer" style={{ marginLeft: 12 }} className="btn">Open Resume</a>
            </p>
            <div style={{ marginTop: 18 }}>
                <h3>NANDHINI P</h3>
                <p>Python Developer pursuing B.E. in Computer Science. Quick summary and project highlights are available in the downloadable resume.</p>
            </div>
        </section>
    );
}
