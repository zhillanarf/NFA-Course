// src/pages/BookPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import books from "../Utils/books";

function BookPage() {
    return (
        <div className="container">
            {/* Header */}
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

            {/* Konten Buku */}
            <div className="my-5">
                <h2 className="mb-4">Daftar Buku</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {books.map((book) => (
                        <div className="col" key={book.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={book.image}
                                    className="card-img-top"
                                    alt={book.title}
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {book.author} ({book.year})
                                    </h6>
                                    <p className="card-text">{book.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/book" className="nav-link px-2 text-body-secondary">Book</Link></li>
                        <li className="nav-item"><Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
                </footer>
            </div>
        </div>
    );
}

export default BookPage;
