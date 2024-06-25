import React, { useState, useEffect } from "react";
import Nav from '../components/Navbar';


const Contact = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [errors, setErrors] = useState({});
const [touchedEmail, setTouchedEmail] = useState(false);
const [touchedMessage, setTouchedMessage] = useState(false);

useEffect(() => {
    if (touchedEmail) {
    validateEmail();
    }
}, [email, touchedEmail]);

useEffect(() => {
    if (touchedMessage) {
    validateMessage();
    }
}, [message, touchedMessage]);

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
    setErrors((prevErrors) => ({ ...prevErrors, email: "L'adresse mail est obligatoire." }));
    } else if (!emailRegex.test(email)) {
    setErrors((prevErrors) => ({ ...prevErrors, email: "L'adresse mail ne respecte pas le format attendu." }));
    } else {
    setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
    });
    }
};
const validateMessage = () => {
    if (!message) {
    setErrors((prevErrors) => ({ ...prevErrors, message: "Le message est obligatoire." }));
    } else if (message.length < 10) {
    setErrors((prevErrors) => ({ ...prevErrors, message: "Le message est trop court." }));
    } else {
    setErrors((prevErrors) => {
        const { message, ...rest } = prevErrors;
        return rest;
    });
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
    alert("Votre message a été envoyé !");
      // Réinitialiser le formulaire après soumission
    setEmail("");
    setMessage("");
    setTouchedEmail(false);
    setTouchedMessage(false);
    setErrors({});
    } else {
    setErrors(formErrors);
    }
};

const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
    newErrors.email = "L'adresse mail est obligatoire.";
    } else if (!emailRegex.test(email)) {
    newErrors.email = "L'adresse mail ne respecte pas le format attendu.";
    }

    if (!message) {
    newErrors.message = "Le message est obligatoire.";
    } else if (message.length < 10) {
    newErrors.message = "Le message est trop court.";
    }

    return newErrors;
};

    return (
        <>
            <Nav />
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="mt-1 row">
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
                        <div className="mt-5 col-lg-8 mt-lg-0">
                            <div className="max-w-md p-6 bg-white rounded-md shadow-md">
                                <form onSubmit={handleSubmit} className="php-email-form">
                                
                                    <div className="mt-3 form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onFocus={() => setTouchedEmail(true)}
                                        onChange={(e) => setEmail(e.target.value)}
                                />
                                                    {errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                
                                    <div className="mt-3 form-group">
                                    <textarea
                                                id="message"
                                                placeholder="Message"
                                                className="form-control"
                                                value={message}
                                                onFocus={() => setTouchedMessage(true)}
                                                onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                                    {errors.message && <p className="error">{errors.message}</p>}
                                        
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