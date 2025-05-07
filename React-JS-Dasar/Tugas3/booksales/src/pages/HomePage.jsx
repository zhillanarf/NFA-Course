// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
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

                {/* Hero */}
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Kala Senja Menyapa</h1>
                            <p className="lead">Cinta, luka, harapan, dan rahasia bertemu saat senja menyapa. Di antara bayang senja, kisah masa lalu perlahan terungkap dan menyatu.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli Sekarang</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Details</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="https://marketplace.canva.com/EAFY7T6tOE0/1/0/1003w/canva-oren-estetik-buku-cerita-pasangan-cinta-romantis-kartun-bagus-laGditSTCv0.jpg" alt="" width="350" />
                        </div>
                    </div>
                </div>

                {/* Product List */}
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Buku Paling Laris</h1>
                            <p className="lead text-body-secondary">Temukan koleksi buku terbaik pilihan kami—beragam genre, penulis ternama, dan cerita menarik yang siap menemani harimu. Jangan lewatkan rekomendasi spesial kami!</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2 m-2">Lihat</a>
                                <a href="#" className="btn btn-secondary my-2">Buku Lainnya</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://cdn.gramedia.com/uploads/items/9786020332949_Bulan-New-Cover.jpg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Bulan - Tere Liye</h5>
                                <p className="card-text">Kelanjutan dari petualangan Raib, Seli, dan Ali di dunia paralel. Dalam "Bulan", mereka menjelajahi dunia baru yang penuh keajaiban dan tantangan, mengungkap rahasia besar tentang..</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://cdn1.productnation.co/stg/sites/5/5d64fd0659ad6.jpeg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Seni Untuk Bersikap Bodo Amat - Mark Manson</h5>
                                <p className="card-text">Buku self-help yang mengajak pembaca untuk berhenti terlalu peduli pada hal-hal yang tidak penting. Mark Manson menyajikan..</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://www.gramedia.com/blog/content/images/2022/06/img20220101_11444970.jpg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Filosofi Teras - Henry Manampiring</h5>
                                <p className="card-text">Perkenalan modern terhadap filsafat Stoikisme yang membumi dan relevan dengan kehidupan sehari-hari. Buku ini memberi panduan untuk mengelola emosi, menerima keadaan, dan menjalani..</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://cdn.gramedia.com/uploads/picture_meta/2023/12/22/2hegsxjpmzzanpbrp6erk9.jpg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">5 CM - Donny Dhirgantoro</h5>
                                <p className="card-text">Kisah lima sahabat yang melakukan perjalanan mendaki Mahameru, penuh dengan nilai persahabatan, mimpi, dan perjuangan. Cerita ini menginspirasi untuk terus melakukan apa yang selalu menjadi..</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://www.gramedia.com/blog/content/images/2022/09/psychology_of_money.jpg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">The Psychology of Money - Morgan Housel</h5>
                                <p className="card-text">Buku ini membahas bagaimana perilaku dan pola pikir lebih berpengaruh dalam mengelola uang dibandingkan pengetahuan teknis. Dengan cerita-cerita nyata, buku ini..</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://inc.mizanstore.com/aassets/img/com_cart/produk/PULANG.jpg" alt="Thumbnail" className="card-img-top" style={{ height: "225px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Pulang - Tere Liye</h5>
                                <p className="card-text">Sebuah novel penuh emosi tentang kehidupan. Bujang, seorang tukang pukul sekaligus anak muda dari keluarga pembunuh bayaran. Cerita ini membawamu menyelami konflik batin, cinta, dan pencarian jati diri dalam dunia yang keras dan kelam.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary">Selengkapnya</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Simpan</button>
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
                            <li className="nav-item"><Link to="/" href="#" className="nav-link px-2 text-body-secondary">Home</Link></li>
                            <li className="nav-item"><Link to="/book" className="nav-link px-2 text-body-secondary">Book</Link></li>
                            <li className="nav-item"><Link to="/team" href="#" className="nav-link px-2 text-body-secondary">Team</Link></li>
                            <li className="nav-item"><Link to="/contact" href="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                        </ul>
                        <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default HomePage;
