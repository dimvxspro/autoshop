import { Outlet  } from 'react-router-dom';
import {BlogList} from "../Components/Blog-list";
import React from "react";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";

export const Blog = () => (
    <>
        <HeaderDark/>
        <section className="mt-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
                <h1 className="dm-sans-bold" data-aos="fade-up" data-aos-delay="200">Blog</h1>
                <div className="row align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-12 my-5">
                        <BlogList/>
                    </div>
                </div>
                <div className="row d-flex justify-content-end text-center">
                    <div className="col-12">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
        <Footer/>
        <Outlet/>
    </>

);