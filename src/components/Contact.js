import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section container">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:nandhiniprabu0608@gmail.com">nandhiniprabu0608@gmail.com</a></p>
            <p>Phone: 8270119518</p>
            <form action="https://script.google.com/macros/s/AKfycbykG97Pl3SqDNP_9PuZdyAjsXp0hzl1h2wkCmNB6WvzZLEH95_pSV3Wm9Axix-9ULA/exec" method="post">
                <input name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" placeholder="Your Message"></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    );
}
