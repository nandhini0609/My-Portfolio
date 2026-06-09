import React from 'react';

const projects = [
    { id: 1, title: 'Nmart Ecommerce (React)', img: '/images/Nmart ecommerce website.png', desc: 'Ecommerce site built with React and Express.', url: 'https://react-ecommerce-website-pearl.vercel.app/' },
    { id: 2, title: 'Question Paper Generator (React)', img: '/images/Qp generator.png', desc: 'React frontend with FastAPI backend.', url: 'https://question-paper-generator-frontend.vercel.app/' },
    { id: 3, title: 'Portfolio (React)', img: '/images/ChatGPT Image Aug 29, 2025, 11_49_54 PM.png', desc: 'Personal portfolio implemented in React.', url: 'https://my-portfolio-nandhini.vercel.app/' },
    { id: 4, title: '3G Fitness Studio (React)', img: '/images/gym fitness.png', desc: 'Client site built with React.', url: 'https://gym-fitness-website-sable.vercel.app/#' }
];

export default function Projects() {
    return (
        <section id="projects" className="section container">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map(p => (
                    <article key={p.id} className="project-card">
                        <img src={process.env.PUBLIC_URL + p.img} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <p><a href={p.url} target="_blank" rel="noreferrer">View Project</a></p>
                    </article>
                ))}
            </div>
        </section>
    );
}
