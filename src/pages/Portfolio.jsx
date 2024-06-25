import React, { useState } from "react";
import Nav from '../components/Navbar';
import suppa from '../assets/img/suppa.jpg';
import bnb from '../assets/img/bnb.jpg';
import cinemax from '../assets/img/cine.jpg';

const projectdata = [
    {
        id: 1,
        name: "Supakar GTA",
        technology: "React",
        image: suppa,
        sourceLink: "https://supakar-gta-six.vercel.app",
        description: "Changement de couleur d'une voiture dans le style GTA de façon dynamique.",
    },
    {
        id: 2,
        name: "BnB",
        technology: "Symfony",
        image: bnb,
        sourceLink: "https://github.com/AlaeddineC9/bnb2402-master",
        description: "Creation d'un site de location de logement entre particuliers.",
    },
    {
        id: 3,
        name: "Cinemax",
        technology: "React",
        image: cinemax,
        sourceLink: "https://github.com/AlaeddineC9/cinemax",
        description: "Site de recherche de films et séries avec une API Externe.",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectdata);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Nav />
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <input
                            type="text"
                            placeholder="Recherche par nom de projet"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="row">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="col-lg-4">
                                <div className="portfolio-item">
                                    <img src={project.image} className="img-fluid" alt={project.name} />
                                    <div className="portfolio-info">
                                        <h4>{project.name}</h4>
                                        <p>{project.technology}</p>
                                        <p className="description">{project.description}</p>
                                        <div className="portfolio-links">
                                            <a href={project.sourceLink} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Source">
                                                <i className="bx bx-link">voir source</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;