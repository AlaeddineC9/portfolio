import React from "react";
import Nav from '../components/Navbar';
import { useSpring, animated } from '@react-spring/web';

const skills = [
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "90%" },
    { name: "JavaScript", percentage: "75%" },
    { name: "PHP", percentage: "80%" },
    { name: "WordPress/CMS", percentage: "90%" },
    { name: "Photoshop", percentage: "55%" },
];

export default function Competance() {
    const progressBarAnimations = skills.map(skill =>
        useSpring({ from: { width: "0%" }, to: { width: skill.percentage }, config: { duration: 2000 } })
    );

    return (
        <>
            <Nav />
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Mes compétences</h2>
                        <p className="pres">Elles sont en constantes améliorations car pour moi la joie de ce métier fait
                            que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.</p>
                    </div>

                    <div className="row skills-content">
                        {skills.map((skill, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="progress">
                                    <span className="skill">{skill.name} <i className="val">{skill.percentage}</i></span>
                                    <div className="progress-bar-wrap">
                                        <animated.div className="progress-bar" style={progressBarAnimations[index]}></animated.div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="download-link">
                    <img src="src/assets/img/Chraiti.png" alt="Chraiti" />
                    <a href="src/assets/img/Chraiti.pdf" className="download-button" download>
                        Télécharger mon CV
                    </a>
                </div>
            </section>
        </>
    );
}