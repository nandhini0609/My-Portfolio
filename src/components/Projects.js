import React, { useState } from 'react';

const projects = [
    { id: 1, title: 'Nmart Ecommerce (React)', img: '/images/Nmart ecommerce website.png', desc: 'Ecommerce site built with React and Express.', url: 'https://react-ecommerce-website-pearl.vercel.app/', tags: ['React'] },
    { id: 2, title: 'Question Paper Generator (React)', img: '/images/Qp generator.png', desc: 'React frontend with FastAPI backend.', url: 'https://question-paper-generator-frontend.vercel.app/', tags: ['React'] },
    { id: 3, title: 'Portfolio (React)', img: '/images/ChatGPT Image Aug 29, 2025, 11_49_54 PM.png', desc: 'Personal portfolio implemented in React.', url: 'https://my-portfolio-nandhini.vercel.app/', tags: ['React'] },
    { id: 4, title: '3G Fitness Studio (React)', img: '/images/gym fitness.png', desc: 'Client site built with React.', url: 'https://gym-fitness-website-sable.vercel.app/#', tags: ['React'] }
];

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div className="modal" role="dialog" aria-hidden={project ? 'false' : 'true'} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p><a href={project.url} target="_blank" rel="noreferrer">Open Project</a></p>
            </div>
        </div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [selected, setSelected] = useState(null);
    const tags = ['All', 'React'];
    const visible = projects.filter(p => filter === 'All' || p.tags.includes(filter));

    return (
        <section id="projects" className="section container">
            <h2>Projects</h2>
            <div style={{ marginBottom: 12 }}>
                {tags.map(t => (
                    <button key={t} onClick={() => setFilter(t)} style={{ marginRight: 8 }} className={t === filter ? 'btn active' : ''}>{t}</button>
                ))}
            </div>
            <div className="project-grid">
                {visible.map(p => (
                    <article key={p.id} className="project-card" onClick={() => setSelected(p)}>
                        <img src={process.env.PUBLIC_URL + p.img} alt={p.title} loading="lazy" />
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <p><a href={p.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>View Project</a></p>
                    </article>
                ))}
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
