import React from 'react';
import logoImg from '../assets/image/navbar/logo.svg';

export function HeaderLight() {
    return (

        <section className="py-3 bg-black">
            <div className="px-3">
                <div className="row align-items-center align-content-center">
                    <div className="col-3 col-md-5 col-lg-5 order-1">
                        <a className="navbar-brand dm-sans-bold text-white align-items-center" href="#">
                            <img src={logoImg} alt="Logo" />
                        </a>
                    </div>
                    <div className="col-1 col-lg-7  align-content-center d-flex justify-content-end order-lg-2 order-3">
                        <div className="d-flex align-items-center ">
                            <nav id="navbar" className="navbar d-flex">
                                <ul className="">
                                    {/* home */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Home
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* listing */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Listing
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* blog */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* Pages */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* About */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </li>

                                    {/* Contact */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Contact</a>
                                    </li>

                                    {/* Sign-in */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#"><i className="bi bi-person"></i> Sign in</a>
                                    </li>

                                    {/* button */}
                                    <li className="nav-item">
                                        <a className="nav-link btn-lg btn bg-white border-46 text-black px-3 py-2 dm-sans-medium"
                                           href="#">Submit Listing</a>
                                    </li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>






        // <div className="bg-danger py-3">
        //     <div className="container-fluid navbar ">
        //         <div className="row align-items-center">
        //             <div className="col-6">
        //                 <a className="navbar-brand dm-sans-bold text-white align-items-center" href="#">
        //                     <img src={logoImg} alt="Logo" />
        //                 </a>
        //             </div>
        //             <div className="col-6">
        //                 <div className="d-flex justify-content-end">
        //                     <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        //                     </button>
        //                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //                         <ul className="navbar-nav">
        //                             {/* home */}
        //                             <li className="nav-item dropdown">
        //                                 <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     Home
        //                                 </a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Another action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                                 </ul>
        //                             </li>
        //
        //                             {/* listing */}
        //                             <li className="nav-item dropdown">
        //                                 <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     Listing
        //                                 </a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Another action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                                 </ul>
        //                             </li>
        //
        //                             {/* blog */}
        //                             <li className="nav-item dropdown">
        //                                 <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     Blog
        //                                 </a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Another action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                                 </ul>
        //                             </li>
        //
        //                             {/* Pages */}
        //                             <li className="nav-item dropdown">
        //                                 <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                     Pages
        //                                 </a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Another action</a></li>
        //                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                                 </ul>
        //                             </li>
        //
        //                             {/* About */}
        //                             <li className="nav-item">
        //                                 <a className="nav-link text-white" href="#">About</a>
        //                             </li>
        //
        //                             {/* Contact */}
        //                             <li className="nav-item">
        //                                 <a className="nav-link text-white" href="#">Contact</a>
        //                             </li>
        //
        //                             {/* Sign-in */}
        //                             <li className="nav-item">
        //                                 <a className="nav-link text-white" href="#"><i className="bi bi-person"></i> Sign in</a>
        //                             </li>
        //
        //                             {/* button */}
        //                             <li className="nav-item">
        //                                 <a className="nav-link btn-lg btn btn-outline-white text-white px-3" href="#">Submit Listing</a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}





// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// // Uncomment and adjust the path to your logo if needed
// // import logo from './assets/img/logo/white.svg';
//
// export const HeaderLight = () => {
//     return (
//         <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '60.5px' }}>
//             <Navbar bg="light" expand="xl" fixed="top" style={{ width: '1939px' }}>
//                 <div className="container">
//                     <Navbar.Brand href="index.html">
//                         Brand<span className="text-primary">.</span>
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ml-auto">
//                             <Nav.Link href="#home-section">Home</Nav.Link>
//                             <NavDropdown title="About Us" id="about-section">
//                                 <NavDropdown.Item href="#team-section">Team</NavDropdown.Item>
//                                 <NavDropdown.Item href="#pricing-section">Pricing</NavDropdown.Item>
//                                 <NavDropdown.Item href="#faq-section">FAQ</NavDropdown.Item>
//                                 <NavDropdown.Item href="#gallery-section">Gallery</NavDropdown.Item>
//                                 <NavDropdown.Item href="#services-section">Services</NavDropdown.Item>
//                                 <NavDropdown.Item href="#testimonials-section">Testimonials</NavDropdown.Item>
//                                 <NavDropdown title="More Links" id="more-links">
//                                     <NavDropdown.Item href="#">Menu One</NavDropdown.Item>
//                                     <NavDropdown.Item href="#">Menu Two</NavDropdown.Item>
//                                     <NavDropdown.Item href="#">Menu Three</NavDropdown.Item>
//                                 </NavDropdown>
//                             </NavDropdown>
//                             <Nav.Link href="#blog-section">Blog</Nav.Link>
//                             <Nav.Link href="#contact-section">Contact</Nav.Link>
//                             <Nav.Link href="#contact-section"><span className="icon-facebook"></span></Nav.Link>
//                             <Nav.Link href="#contact-section"><span className="icon-twitter"></span></Nav.Link>
//                             <Nav.Link href="#contact-section"><span className="icon-linkedin"></span></Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                     <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}>
//                         <a href="#" className="site-menu-toggle js-menu-toggle float-right active">
//                             <span className="icon-menu h3"></span>
//                         </a>
//                     </div>
//                 </div>
//             </Navbar>
//         </div>
//     );
// }
//

