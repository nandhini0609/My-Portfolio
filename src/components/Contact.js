import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykG97Pl3SqDNP_9PuZdyAjsXp0hzl1h2wkCmNB6WvzZLEH95_pSV3Wm9Axix-9ULA/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fd = new FormData(form);
        const name = (fd.get('Name') || '').toString().trim();
        const email = (fd.get('Email') || '').toString().trim();
        const message = (fd.get('Message') || '').toString().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !message) { setStatus('Please fill all fields.'); return; }
        if (!emailRegex.test(email)) { setStatus('Please enter a valid email.'); return; }
        setStatus('Sending...');
        fetch(scriptURL, { method: 'POST', body: fd })
            .then(() => { setStatus('Message sent — thank you!'); form.reset(); })
            .catch(() => setStatus('Submission failed — try again later.'));
    };

    return (
        <section id="contact" className="section container">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:nandhiniprabu0608@gmail.com">nandhiniprabu0608@gmail.com</a></p>
            <p>Phone: 8270119518</p>
            <form onSubmit={handleSubmit}>
                <input name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" placeholder="Your Message"></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
            {status && <p aria-live="polite">{status}</p>}
        </section>
    );
}
