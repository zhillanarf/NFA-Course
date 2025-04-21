import React from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
    return (
        <div className="container">

            {/* header */}
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                        <i className="fa-solid fa-book fa-2xl" style={{ color: "#0d6efd" }}></i>
                        <span className="ms-2 fs-4">bookstore</span>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li><Link to="/book" className="nav-link px-2">Book</Link></li>
                    <li><Link to="/team" className="nav-link px-2">Team</Link></li>
                    <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <h2 className="fw-bold">Get in Touch</h2>
                            <p className="text-muted">Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>
                        </div>
                    </div>

                    <div className="row g-5">
                        {/* Contact Info */}
                        <div className="col-md-5">
                            <h4 className="mb-4">Contact Information</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="fa-solid fa-location-dot me-2 text-primary"></i>
                                    Jl. Raya Lenteng Agung No.20C, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12640
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-envelope me-2 text-primary"></i>
                                    nfacademy@gmail.com
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-phone me-2 text-primary"></i>
                                    +62 812-3456-7890
                                </li>
                                <li className="mb-3">
                                    <i className="fa-brands fa-instagram me-2 text-primary"></i>
                                    @nfacademy.id
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-7">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    <i className="fa-solid fa-paper-plane me-2"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/book" className="nav-link px-2 text-body-secondary">Book</Link></li>
                        <li className="nav-item"><Link to="/team" href="#" className="nav-link px-2 text-body-secondary">Team</Link></li>
                        <li className="nav-item"><Link to="/contact" href="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
                </footer>
            </div>
        </div>
    );
}

export default ContactPage;