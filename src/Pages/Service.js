import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import React from 'react';
import {SingleImg3} from "../Components/Single-img-3";
import {Benefits1} from "../Components/benefits-1";
import {BlogSlide} from "../Components/car-blog-slide";


export const Service = () => (
    <>
        <HeaderDark/>
        <section className="mt-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
                    </ol>
                </nav>
                <h2 className="dm-sans-bold">Services</h2>
                <SingleImg3/>
            </div>
        </section>
        <Benefits1/>
        <BlogSlide/>
        <Footer/>
        <Outlet/>
    </>

);