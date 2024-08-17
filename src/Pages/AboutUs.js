import { Outlet  } from 'react-router-dom';
import {FAQSection} from "../Components/FAQ";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {Benefits1} from "../Components/benefits-1";
import {SliderVideo} from "../Components/Slider-video";
import {Brands} from "../Components/Brands";
import {Team} from "../Components/Team";
import {AboutUsInfo} from "../Components/About-us-info";
import React from "react";
import {Counter} from "../Components/Counter";
import {Reviews1} from "../Components/Reviews";

export const AboutUs = () => (
    <>
        <HeaderDark/>
            <section className="mt-5">
                    <div className="container">
                            <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                            </nav>
                            <h2 className="dm-sans-bold">About Us</h2>
                    </div>
            </section>
        <AboutUsInfo/>
        <Benefits1/>
        <SliderVideo/>
        <Counter/>
        <Brands/>
        <Team/>
        <Reviews1/>
        <FAQSection/>
        <Outlet/>
        <Footer/>
    </>

);