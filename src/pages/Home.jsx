import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Nav from '../components/Navbar';

const Home = () => {
    useEffect(() => {
        // Options de l'animation
        const options = {
            strings: ["Designeur", "Developpeur", "Freelanceur"], // Mots à afficher
            typeSpeed: 100, // Vitesse de frappe
            backSpeed: 50, // Vitesse de suppression
            loop: true, // Répéter l'animation en boucle
        };

        // Créer une instance Typed
        const typed = new Typed('.typed', options);

        // Nettoyer la Typed instance lors du démontage du composant
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Nav />
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Chraiti Alaeddine</h1>
                    <p>je suis <span className="typed" data-typed-items="Designeur, Developpeur, Freelanceur"></span></p>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="src/assets/img/profil.jpg" className="img-fluide" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Développeur Web &amp; Web-Mobile.</h3>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Date de Naissance:</strong> <span>16 Mars 1993</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Télephone:</strong> <span>+33 6 59 29 05 83</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Meriel, France</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>31</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bac+2</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>alaeddinechraiti@Gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        <h2>A propos de moi</h2>
                        <article>A 31 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web.
                        Suite à un bac +2 développeur web à l'école Prep'Avenir, j’ai pu acquérir les bases de plusieurs langages web (HTML, CSS, Javascript, PHP), la gestion de bases de données mais aussi l’utilisation de logiciels tels que Illustrator, Blender ou Figma que j’utilise régulièrement pour créer des maquettes interactives.</article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;