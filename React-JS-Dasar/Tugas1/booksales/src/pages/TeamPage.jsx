import React from 'react';
import { Link } from 'react-router-dom';
import zhillanImg from '../assets/zhillan.png';

function TeamPage() {
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
                    <li><a href="#" className="nav-link px-2">Book</a></li>
                    <li><Link to="/team" className="nav-link px-2">Team</Link></li>
                    <li><Link to="/contact" href="#" className="nav-link px-2">Contact</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Meet Our Team</h1>
                        <p className="lead text-muted">We are a passionate team of developers, designers, and dreamers.</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/* Card 1 */}
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={zhillanImg} className="bd-placeholder-img card-img-top" alt="Team Member" style={{
                                    height: '250px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Zhillan Arrafi</h5>
                                    <p className="card-text text-muted">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className="bd-placeholder-img card-img-top" alt="Team Member" style={{
                                    height: '250px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Ahmad Miftah</h5>
                                    <p className="card-text text-muted">Backend Engineer</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className="bd-placeholder-img card-img-top" alt="Team Member" style={{
                                    height: '250px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Budi Santoso</h5>
                                    <p className="card-text text-muted">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
                        <li className="nav-item"><Link to="/team" href="#" className="nav-link px-2 text-body-secondary">Team</Link></li>
                        <li className="nav-item"><Link to="/contact" href="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
                </footer>
            </div>
        </div>
    );
}

export default TeamPage;