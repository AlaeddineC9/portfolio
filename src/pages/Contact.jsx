import React, { useState } from "react";
import Nav from '../components/Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validate = () => {
        let tempErrors = {};
        const nameRegex = /^[a-zA-ZÀ-ÿ '-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name || !nameRegex.test(formData.name)) {
            tempErrors.name = 'Nom et Prénom invalide.';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            tempErrors.email = 'Email invalide.';
        }
        if (!formData.subject) {
            tempErrors.subject = 'Le sujet est requis.';
        }
        if (!formData.message) {
            tempErrors.message = 'Le message est requis.';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Data Submitted: ', formData);
            alert('Votre message a été envoyé avec succès.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };

    return (
        <>
            <Nav />
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Adresse:</h4>
                                    <p>28 Rue de Port 95630 Meriel</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>alaeddinechraiti@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Télephone:</h4>
                                    <p>+33 6 59 29 05 83</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-10">
                                <form onSubmit={handleSubmit} className="php-email-form">
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Nom complet"
                                            className="form-control"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Sujet"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Message"
                                            className="form-control"
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;