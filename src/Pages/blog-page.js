import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {BlogCarInfo} from "../Components/blog-car-info";
import {Comments} from "../Components/comments";
import {HeaderDark} from "../Components/Header-dark-1";
import {BlogSlide} from "../Components/car-blog-slide";
import {SingleImg3} from "../Components/Single-img-3";
import React from "react";

export const BlogPage = () => (
    <>
        <HeaderDark/>
            <section className="mt-5">
                    <div className="container">
                            <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Accessories</li>
                                    </ol>
                            </nav>
                            <h2 className="dm-sans-bold">BMW X6 M50i is designed to exceed your sportiest.</h2>
                    </div>
            </section>
        <Outlet/>
        <BlogCarInfo/>
        <Comments/>
        <BlogSlide/>
        <Footer/>
    </>

);